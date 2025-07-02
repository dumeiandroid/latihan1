// functions/api/contacts/[id].js - Fixed for id_x structure
export async function onRequest(context) {
  const { request, env, params } = context;
  const method = request.method;
  const id = params.id;

  console.log(`=== API [${method}] /api/contacts/${id} ===`);
  console.log('Request URL:', request.url);
  console.log('Params:', params);
  console.log('Method:', method);

  // CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // Handle preflight
  if (method === 'OPTIONS') {
    console.log('Handling OPTIONS request');
    return new Response(null, { headers: corsHeaders });
  }

  // Check if we have DB_LATIHAN1
  if (!env.DB_LATIHAN1) {
    console.error('Database not available');
    return new Response(JSON.stringify({ error: 'Database not available' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders }
    });
  }

  // Validate ID
  if (!id) {
    console.error('No ID provided');
    return new Response(JSON.stringify({ error: 'No ID provided' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', ...corsHeaders }
    });
  }

  try {
    if (method === 'GET') {
      return await handleGetSingle(env.DB_LATIHAN1, id, corsHeaders);
    } else if (method === 'PUT') {
      return await handleUpdate(request, env.DB_LATIHAN1, id, corsHeaders);
    } else if (method === 'DELETE') {
      return await handleDelete(env.DB_LATIHAN1, id, corsHeaders);
    } else {
      console.log('Method not allowed:', method);
      return new Response(JSON.stringify({ error: `Method ${method} not allowed` }), {
        status: 405,
        headers: { 'Content-Type': 'application/json', ...corsHeaders }
      });
    }
  } catch (error) {
    console.error('Unhandled error:', error);
    return new Response(JSON.stringify({ 
      error: `Server error: ${error.message}`,
      stack: error.stack
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders }
    });
  }
}

// GET single contact by id_x
async function handleGetSingle(DB_LATIHAN1, id, corsHeaders) {
  console.log(`--- GET single contact with id_x ${id} ---`);
  
  try {
    const query = "SELECT * FROM contacts WHERE id_x = ?";
    const result = await DB_LATIHAN1.prepare(query).bind(id).first();
    console.log('Get single result:', result);

    if (!result) {
      return new Response(JSON.stringify({ error: 'Contact not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json', ...corsHeaders }
      });
    }

    return new Response(JSON.stringify({ 
      success: true,
      data: result
    }), {
      headers: { 'Content-Type': 'application/json', ...corsHeaders }
    });

  } catch (error) {
    console.error('Get single error:', error);
    return new Response(JSON.stringify({ 
      error: `Get failed: ${error.message}`,
      stack: error.stack
    }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', ...corsHeaders }
    });
  }
}

// UPDATE contact by id_x - Fixed for x_01 to x_20 structure
async function handleUpdate(request, DB_LATIHAN1, id, corsHeaders) {
  console.log(`--- UPDATE contact ${id} ---`);
  
  try {
    // Get request body
    const contentType = request.headers.get('content-type');
    console.log('Content-Type:', contentType);
    
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error('Content-Type must be application/json');
    }

    const body = await request.text();
    console.log('Raw body:', body);
    
    const data = JSON.parse(body);
    console.log('Parsed data:', data);

    // Check if contact exists first using id_x
    console.log('Checking if contact exists...');
    const existsQuery = "SELECT id_x FROM contacts WHERE id_x = ?";
    const existsResult = await DB_LATIHAN1.prepare(existsQuery).bind(id).first();
    console.log('Exists check result:', existsResult);

    if (!existsResult) {
      return new Response(JSON.stringify({ error: 'Contact not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json', ...corsHeaders }
      });
    }

    // Build dynamic update query for x_01 to x_20 columns
    const updateFields = [];
    const updateValues = [];
    
    for (let i = 1; i <= 20; i++) {
      const colNum = i.toString().padStart(2, '0');
      const colName = `x_${colNum}`;
      
      if (data.hasOwnProperty(colName)) {
        updateFields.push(`${colName} = ?`);
        updateValues.push(data[colName]);
      }
    }

    // Basic validation - require at least one field to update
    if (updateFields.length === 0) {
      throw new Error('At least one field (x_01 to x_20) is required for update');
    }

    // Add id for WHERE clause
    updateValues.push(id);

    // Update contact
    console.log('Updating contact...');
    const updateQuery = `UPDATE contacts SET ${updateFields.join(', ')} WHERE id_x = ?`;
    console.log('Update query:', updateQuery);
    console.log('Update values:', updateValues);
    
    const updateResult = await DB_LATIHAN1.prepare(updateQuery).bind(...updateValues).run();
    console.log('Update result:', updateResult);

    return new Response(JSON.stringify({ 
      success: true,
      message: 'Contact updated successfully',
      changes: updateResult.changes,
      updatedFields: updateFields.map(field => field.split(' = ')[0]),
      updatedData: data
    }), {
      headers: { 'Content-Type': 'application/json', ...corsHeaders }
    });

  } catch (error) {
    console.error('Update error:', error);
    return new Response(JSON.stringify({ 
      error: `Update failed: ${error.message}`,
      stack: error.stack
    }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', ...corsHeaders }
    });
  }
}

// DELETE contact by id_x
async function handleDelete(DB_LATIHAN1, id, corsHeaders) {
  console.log(`--- DELETE contact ${id} ---`);
  
  try {
    // Check if contact exists first using id_x
    console.log('Checking if contact exists...');
    const existsQuery = "SELECT id_x, x_01, x_02, x_03 FROM contacts WHERE id_x = ?";
    const existsResult = await DB_LATIHAN1.prepare(existsQuery).bind(id).first();
    console.log('Exists check result:', existsResult);

    if (!existsResult) {
      return new Response(JSON.stringify({ error: 'Contact not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json', ...corsHeaders }
      });
    }

    // Delete contact using id_x
    console.log('Deleting contact...');
    const deleteQuery = "DELETE FROM contacts WHERE id_x = ?";
    const deleteResult = await DB_LATIHAN1.prepare(deleteQuery).bind(id).run();
    console.log('Delete result:', deleteResult);

    return new Response(JSON.stringify({ 
      success: true,
      message: 'Contact deleted successfully',
      changes: deleteResult.changes,
      deletedContact: existsResult
    }), {
      headers: { 'Content-Type': 'application/json', ...corsHeaders }
    });

  } catch (error) {
    console.error('Delete error:', error);
    return new Response(JSON.stringify({ 
      error: `Delete failed: ${error.message}`,
      stack: error.stack
    }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', ...corsHeaders }
    });
  }
}