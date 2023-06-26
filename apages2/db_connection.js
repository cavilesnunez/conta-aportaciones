// Importar el módulo mysql
const mysql = require('mysql');

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'http://localhost:8080/phpmyadmin/',
  user: 'root',
  password: '',
  database: 'cyfap',
});

// Conectar a la base de datos
connection.connect((error) => {
  if (error) throw error;
  console.log('Conexión exitosa a la base de datos');
});

// Exportar la conexión para su uso en otros archivos
module.exports = connection;
