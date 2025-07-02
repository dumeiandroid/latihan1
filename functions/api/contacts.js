// functions/api/contacts.js - Dynamic CRUD API
export async function onRequest(context) {
  const { request, env } = context;
  const { DB_LATIHAN1 } = env;
  const method = request.method;
  
  // CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-Table-Name',
  };
  
  // Handle preflight
  if (method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }
  
  // Get table name from header or body
  let tableName = request.headers.get('X-Table-Name') || 'contacts';
  
  // Debug logging
  console.log(`API ${method} request to /api/contacts for table: ${tableName}`);
  
  try {
    switch (method) {
      case 'GET':
        return await getContacts(DB_LATIHAN1, corsHeaders, tableName);
      case 'POST':
        return await createContact(request, DB_LATIHAN1, corsHeaders, tableName);
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

// GET all contacts from dynamic table
async function getContacts(DB_LATIHAN1, corsHeaders, tableName) {
  console.log(`Getting all data from table: ${tableName}`);
  
  // Sanitize table name (basic security)
  if (!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(tableName)) {
    throw new Error('Invalid table name');
  }
  
  try {
    const query = `SELECT * FROM ${tableName} ORDER BY id DESC`;
    const { results } = await DB_LATIHAN1.prepare(query).all();
    console.log(`Found ${results.length} records from ${tableName}`);
    
    return new Response(JSON.stringify(results), {
      headers: { 'Content-Type': 'application/json', ...corsHeaders }
    });
  } catch (error) {
    console.error(`Error reading from table ${tableName}:`, error);
    throw new Error(`Failed to read from table ${tableName}`);
  }
}

// POST create contact in dynamic table
async function createContact(request, DB_LATIHAN1, corsHeaders, tableName) {
  console.log(`Creating new record in table: ${tableName}`);
  
  // Sanitize table name (basic security)
  if (!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(tableName)) {
    throw new Error('Invalid table name');
  }
  
  let requestData;
  try {
    requestData = await request.json();
    console.log('Request data:', requestData);
    
    // Remove table name from data if it exists
    delete requestData.table;
  } catch (error) {
    throw new Error('Invalid JSON data');
  }
  
  const { name, email, message } = requestData;
  
  // Validation
  if (!name || !email || !message) {
    throw new Error('Name, email, and message are required');
  }
  
  if (!email.includes('@')) {
    throw new Error('Invalid email format');
  }
  
  try {
    const query = `INSERT INTO ${tableName} (name, email, message) VALUES (?, ?, ?)`;
    const result = await DB_LATIHAN1.prepare(query)
      .bind(name.trim(), email.trim(), message.trim())
      .run();
    
    console.log('Insert result:', result);
    
    return new Response(JSON.stringify({ 
      success: true, 
      id: result.meta.last_row_id,
      message: `Record created successfully in ${tableName}`,
      table: tableName
    }), {
      headers: { 'Content-Type': 'application/json', ...corsHeaders }
    });
  } catch (dbError) {
    console.error('Database error:', dbError);
    throw new Error(`Failed to save record to table ${tableName}`);
  }
}