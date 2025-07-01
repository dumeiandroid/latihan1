// functions/api/users/index.js
export async function onRequestGet(context) {
  try {
    const { results } = await context.env.DB.prepare("SELECT * FROM users ORDER BY id DESC").all();
    return Response.json({ success: true, data: results });
  } catch (error) {
    console.error('GET /api/users error:', error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function onRequestPost(context) {
  try {
    const { name, email } = await context.request.json();
    
    if (!name || !email) {
      return Response.json({ success: false, error: 'Name and email required' }, { status: 400 });
    }

    const { meta } = await context.env.DB.prepare(
      "INSERT INTO users (name, email) VALUES (?, ?)"
    ).bind(name, email).run();

    const newUser = await context.env.DB.prepare(
      "SELECT * FROM users WHERE id = ?"
    ).bind(meta.last_row_id).first();

    return Response.json({ success: true, data: newUser });
  } catch (error) {
    console.error('POST /api/users error:', error);
    return Response.json({ 
      success: false, 
      error: error.message.includes('UNIQUE constraint') ? 'Email already exists' : error.message 
    }, { status: 500 });
  }
}
