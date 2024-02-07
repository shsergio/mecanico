

const express = require("express");
const mecanicosController = require("../Controllers/mecanicosController"); 

const router = express.Router();

router.get("/", mecanicosController.obtenerMecanicos);
router.get("/:id_mecanico", mecanicosController.obtenerMecanicoPorId);
router.post("/", mecanicosController.crearMecanico);
router.put("/:id_mecanico", mecanicosController.actualizarMecanicoPorId);
router.delete("/:id_mecanico", mecanicosController.eliminarMecanicoPorId);

module.exports = router;
