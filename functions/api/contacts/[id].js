// functions/api/contacts/[id].js - Dynamic version
export async function onRequest(context) {
  const { request, env, params } = context;
  const method = request.method;
  const id = params.id;

  console.log(`=== API [${method}] /api/contacts/${id} ===`);

  // CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-Table-Name',
  };

  // Handle preflight
  if (method === 'OPTIONS') {
    console.log('Handling OPTIONS request');
    return new Response(null, { headers: corsHeaders });
  }

  // Get table name from header
  let tableName = request.headers.get('X-Table-Name') || 'contacts';
  console.log('Table name:', tableName);

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

  // Sanitize table name (basic security)
  if (!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(tableName)) {
    return new Response(JSON.stringify({ error: 'Invalid table name' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', ...corsHeaders }
    });
  }

  try {
    if (method === 'PUT') {
      return await handleUpdate(request, env.DB_LATIHAN1, id, corsHeaders, tableName);
    } else if (method === 'DELETE') {
      return await handleDelete(env.DB_LATIHAN1, id, corsHeaders, tableName);
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

async function handleUpdate(request, DB_LATIHAN1, id, corsHeaders, tableName) {
  console.log(`--- UPDATE record ${id} in table ${tableName} ---`);
  
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

    // Remove table name from data if it exists
    delete data.table;

    const { name, email, message } = data;

    // Basic validation
    if (!name || !email || !message) {
      throw new Error('Missing required fields: name, email, message');
    }

    // Check if record exists first
    console.log('Checking if record exists...');
    const existsQuery = `SELECT id FROM ${tableName} WHERE id = ?`;
    const existsResult = await DB_LATIHAN1.prepare(existsQuery).bind(id).first();
    console.log('Exists check result:', existsResult);

    if (!existsResult) {
      return new Response(JSON.stringify({ error: 'Record not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json', ...corsHeaders }
      });
    }

    // Update record
    console.log('Updating record...');
    const updateQuery = `UPDATE ${tableName} SET name = ?, email = ?, message = ? WHERE id = ?`;
    const updateResult = await DB_LATIHAN1.prepare(updateQuery).bind(name, email, message, id).run();
    console.log('Update result:', updateResult);

    return new Response(JSON.stringify({ 
      success: true,
      message: `Record updated successfully in ${tableName}`,
      changes: updateResult.changes,
      meta: updateResult.meta,
      table: tableName
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

async function handleDelete(DB_LATIHAN1, id, corsHeaders, tableName) {
  console.log(`--- DELETE record ${id} from table ${tableName} ---`);
  
  try {
    // Check if record exists first
    console.log('Checking if record exists...');
    const existsQuery = `SELECT id, name FROM ${tableName} WHERE id = ?`;
    const existsResult = await DB_LATIHAN1.prepare(existsQuery).bind(id).first();
    console.log('Exists check result:', existsResult);

    if (!existsResult) {
      return new Response(JSON.stringify({ error: 'Record not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json', ...corsHeaders }
      });
    }

    // Delete record
    console.log('Deleting record...');
    const deleteQuery = `DELETE FROM ${tableName} WHERE id = ?`;
    const deleteResult = await DB_LATIHAN1.prepare(deleteQuery).bind(id).run();
    console.log('Delete result:', deleteResult);

    return new Response(JSON.stringify({ 
      success: true,
      message: `Record deleted successfully from ${tableName}`,
      changes: deleteResult.changes,
      meta: deleteResult.meta,
      deletedRecord: existsResult,
      table: tableName
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