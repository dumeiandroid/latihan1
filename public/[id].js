// functions/api/users/[id].js
export async function onRequestGet(context) {
  try {
    const id = context.params.id;
    const user = await context.env.DB.prepare("SELECT * FROM users WHERE id = ?").bind(id).first();
    
    if (!user) {
      return Response.json({ success: false, error: 'User not found' }, { status: 404 });
    }
    
    return Response.json({ success: true, data: user });
  } catch (error) {
    console.error(`GET /api/users/${context.params.id} error:`, error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function onRequestPut(context) {
  try {
    const id = context.params.id;
    const { name, email } = await context.request.json();
    
    if (!name || !email) {
      return Response.json({ success: false, error: 'Name and email required' }, { status: 400 });
    }

    const { meta } = await context.env.DB.prepare(
      "UPDATE users SET name = ?, email = ? WHERE id = ?"
    ).bind(name, email, id).run();

    if (meta.changes === 0) {
      return Response.json({ success: false, error: 'User not found' }, { status: 404 });
    }

    const updatedUser = await context.env.DB.prepare("SELECT * FROM users WHERE id = ?").bind(id).first();
    return Response.json({ success: true, data: updatedUser });
  } catch (error) {
    console.error(`PUT /api/users/${context.params.id} error:`, error);
    return Response.json({ 
      success: false, 
      error: error.message.includes('UNIQUE constraint') ? 'Email already exists' : error.message 
    }, { status: 500 });
  }
}

export async function onRequestDelete(context) {
  try {
    const id = context.params.id;
    const { meta } = await context.env.DB.prepare("DELETE FROM users WHERE id = ?").bind(id).run();
    
    if (meta.changes === 0) {
      return Response.json({ success: false, error: 'User not found' }, { status: 404 });
    }
    
    return Response.json({ success: true, message: 'User deleted successfully' });
  } catch (error) {
    console.error(`DELETE /api/users/${context.params.id} error:`, error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
