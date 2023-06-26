// Importar la conexión a la base de datos
const connection = require('./db_connection');

// Función para cargar los usuarios en la tabla usando DataTables
function cargarUsuarios() {
  // Obtener la referencia a la tabla
  const table = $('#tablaClientes').DataTable();

  // Limpiar los datos existentes
  table.clear().draw();

  // Realizar la consulta a la base de datos
  connection.query('SELECT * FROM usuarios', (error, results) => {
    if (error) throw error;

    // Iterar sobre los resultados y agregarlos a la tabla
    results.forEach((usuario) => {
      table.row.add([
        usuario.id,
        usuario.nombre,
        usuario.email,
        `<button onclick="editarUsuario(${usuario.id})">Editar</button>
        <button onclick="eliminarUsuario(${usuario.id})">Eliminar</button>`,
      ]).draw();
    });
  });
}

// Función para abrir el modal de agregar usuario
function abrirModalAgregar() {
  $('#usuarioId').val('');
  $('#nombreInput').val('');
  $('#emailInput').val('');
  $('#usuarioModal').show();
}

// Función para cerrar el modal
function cerrarModal() {
  $('#usuarioModal').hide();
}

// Función para guardar un usuario (agregar o editar)
function guardarUsuario() {
  const usuarioId = $('#usuarioId').val();
  const nombre = $('#nombreInput').val();
  const email = $('#emailInput').val();

  // Verificar si es un nuevo usuario o una actualización
  if (usuarioId) {
    // Actualizar usuario existente
    const sql = 'UPDATE usuarios SET nombre = ?, email = ? WHERE id = ?';
    connection.query(sql, [nombre, email, usuarioId], (error) => {
      if (error) throw error;
      cerrarModal();
      cargarUsuarios();
    });
  } else {
    // Agregar nuevo usuario
    const sql = 'INSERT INTO usuarios (nombre, email) VALUES (?, ?)';
    connection.query(sql, [nombre, email], (error) => {
      if (error) throw error;
      cerrarModal();
      cargarUsuarios();
    });
  }
}

// Función para editar un usuario
function editarUsuario(usuarioId) {
  connection.query('SELECT * FROM usuarios WHERE id = ?', [usuarioId], (error, results) => {
    if (error) throw error;
    const usuario = results[0];
    $('#usuarioId').val(usuario.id);
    $('#nombreInput').val(usuario.nombre);
    $('#emailInput').val(usuario.email);
    $('#usuarioModal').show();
  });
}

// Función para eliminar un usuario
function eliminarUsuario(usuarioId) {
  if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
    connection.query('DELETE FROM usuarios WHERE id = ?', [usuarioId], (error) => {
      if (error) throw error;
      cargarUsuarios();
    });
  }
}

// Inicializar el DataTable y cargar los usuarios al cargar la página
$(document).ready(() => {
  $('#usuariosTable').DataTable();
  cargarUsuarios();
  
  // Asignar eventos a los botones
  $('#agregarBtn').click(abrirModalAgregar);
  $('#guardarBtn').click(guardarUsuario);
  $('#cerrarBtn').click(cerrarModal);
});
