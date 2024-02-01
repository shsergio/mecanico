const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'taller',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// Ruta para obtener todos los trabajos con información de mecanico, cliente y pieza (INNER JOIN)
app.get('/api/trabajos', (req, res) => {
  const sql = `
    SELECT t.*, m.nombre AS nombre_mecanico, c.nombre AS nombre_cliente, p.nombre AS nombre_pieza
    FROM trabajo t
    INNER JOIN mecanico m ON t.id_mecanico = m.id_mecanico
    INNER JOIN cliente c ON t.id_cliente = c.id_cliente
    LEFT JOIN trabajo_pieza tp ON t.id_trabajo = tp.id_trabajo
    LEFT JOIN pieza p ON tp.id_pieza = p.id_pieza
  `;

  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      console.log('Results:', results);
      res.json(results);
    }
  });
});

app.listen(PORT, () => {
  console.log(ya jala ${PORT});
});