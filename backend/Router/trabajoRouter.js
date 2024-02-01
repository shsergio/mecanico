const express = require("express");
const trabajoControllers = require("../Controllers/trabajoControllers");

const router = express.Router();

router.get("/", trabajoControllers.obtenerTrabajos);
router.get("/:id_trabajo", trabajoControllers.obtenerTrabajoPorId);
router.post("/", trabajoControllers.crearTrabajo);
router.delete("/:id_trabajo", trabajoControllers.eliminarTrabajoPorId);
router.put("/:id_trabajo", trabajoControllers.actualizarTrabajoPorId);

module.exports = router;
