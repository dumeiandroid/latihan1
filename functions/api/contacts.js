// functions/api/contacts.js - Fixed for id_x structure
export async function onRequest(context) {
  const { request, env } = context;
  const { DB_LATIHAN1 } = env;
  const method = request.method;
  
  // CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
  
  // Handle preflight
  if (method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }
  
  // Debug logging
  console.log(`API ${method} request to /api/contacts`);
  
  try {
    switch (method) {
      case 'GET':
        return await getContacts(DB_LATIHAN1, corsHeaders);
      case 'POST':
        return await createContact(request, DB_LATIHAN1, corsHeaders);
      default:
        return new Response(JSON.stringify({ error: `Method ${method} not allowed` }), { 
          status: 405, 
          headers: { 'Content-Type': 'application/json', ...corsHeaders }
        });
    }
  } catch (error) {
    console.error('API Error:', error);
    return new Response(JSON.stringify({ 
      error: error.message,
      stack: error.stack 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders }
    });
  }
}

// GET all contacts - Fixed to use id_x
async function getContacts(DB_LATIHAN1, corsHeaders) {
  console.log('Getting all contacts...');
  const { results } = await DB_LATIHAN1.prepare("SELECT * FROM contacts ORDER BY id_x DESC").all();
  console.log(`Found ${results.length} contacts`);
  
  return new Response(JSON.stringify(results), {
    headers: { 'Content-Type': 'application/json', ...corsHeaders }
  });
}

// POST create contact - Fixed for x_01, x_02, x_03... structure
async function createContact(request, DB_LATIHAN1, corsHeaders) {
  console.log('Creating new contact...');
  
  let requestData;
  try {
    requestData = await request.json();
    console.log('Request data:', requestData);
  } catch (error) {
    throw new Error('Invalid JSON data');
  }
  
  // Extract data for x_01 to x_20 columns
  const columns = [];
  const values = [];
  const placeholders = [];
  
  // Generate x_01 to x_20 columns dynamically
  for (let i = 1; i <= 20; i++) {
    const colNum = i.toString().padStart(2, '0');
    const colName = `x_${colNum}`;
    
    if (requestData.hasOwnProperty(colName)) {
      columns.push(colName);
      values.push(requestData[colName]);
      placeholders.push('?');
    }
  }
  
  // Basic validation - require at least one field
  if (columns.length === 0) {
    throw new Error('At least one field (x_01 to x_20) is required');
  }
  
  try {
    const query = `INSERT INTO contacts (${columns.join(', ')}) VALUES (${placeholders.join(', ')})`;
    console.log('Insert query:', query);
    console.log('Values:', values);
    
    const result = await DB_LATIHAN1.prepare(query).bind(...values).run();
    console.log('Insert result:', result);
    
    return new Response(JSON.stringify({ 
      success: true, 
      id_x: result.meta.last_row_id,
      message: 'Contact created successfully',
      insertedFields: columns,
      insertedData: requestData
    }), {
      headers: { 'Content-Type': 'application/json', ...corsHeaders }
    });
  } catch (dbError) {
    console.error('Database error:', dbError);
    throw new Error('Failed to save contact to database');
  }
}