const express = require("express");
const piezaController = require("../Controllers/piezasControllers");

const router = express.Router();

router.get("/", piezaController.obtenerPiezas);
router.get("/:id_pieza", piezaController.obtenerPiezaPorId);
router.post("/", piezaController.crearPieza);
router.put("/:id_pieza", piezaController.actualizarPiezaPorId);
router.delete("/:id_pieza", piezaController.eliminarPiezaPorId);

module.exports = router;
