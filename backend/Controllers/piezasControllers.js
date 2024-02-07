
const connection = require("../database");

// Obtener todas las piezas
const obtenerPiezas = (req, res) => {
  const sql = "SELECT * FROM pieza";

  connection.query(sql, (error, results) => {
    if (error) {
      res.status(500).json({ error: "Error al obtener piezas" });
    } else {
      res.json(results);
    }
  });
};

// Obtener información de una pieza por ID
const obtenerPiezaPorId = (req, res) => {
  const id = req.params.id_pieza;

  const sql = "SELECT * FROM pieza WHERE id_pieza = ?";

  connection.query(sql, [id], (error, results) => {
    if (error) {
      res.status(500).json({ error: "Error al obtener pieza por ID" });
    } else if (results.length === 0) {
      res.status(404).json({ error: "La pieza no fue encontrada por ID" });
    } else {
      res.json(results[0]);
    }
  });
};

// Crear una nueva pieza
const crearPieza = (req, res) => {
  const { nombre, descripcion, costo } = req.body;

  const sql = "INSERT INTO pieza (nombre, descripcion, costo) VALUES (?, ?, ?)";

  connection.query(sql, [nombre, descripcion, costo], (error, results) => {
    if (error) {
      res.status(500).json({ error: "Error al agregar nueva pieza" });
    } else {
      res.json({ message: "Pieza agregada correctamente" });
    }
  });
};

// Actualizar información de una pieza por ID
const actualizarPiezaPorId = (req, res) => {
  const id = req.params.id_pieza;
  const { nombre, descripcion, costo } = req.body;

  const sql = "UPDATE pieza SET nombre = ?, descripcion = ?, costo = ? WHERE id_pieza = ?";

  connection.query(sql, [nombre, descripcion, costo, id], (error, results) => {
    if (error) {
      res.status(500).json({ error: "Error al actualizar pieza por ID" });
    } else {
      res.json({ message: "Pieza actualizada correctamente" });
    }
  });
};

// Eliminar una pieza por ID
const eliminarPiezaPorId = (req, res) => {
  const id = req.params.id_pieza;

  const sql = "DELETE FROM pieza WHERE id_pieza = ?";

  connection.query(sql, [id], (error, results) => {
    if (error) {
      res.status(500).json({ error: "Error al eliminar pieza por ID" });
    } else {
      res.json({ message: "Pieza eliminada correctamente" });
    }
  });
};

module.exports = {
  obtenerPiezas,
  obtenerPiezaPorId,
  crearPieza,
  actualizarPiezaPorId,
  eliminarPiezaPorId,
};
