const express = require("express");
const cors = require("cors");
const trabajoRouter = require("./Router/trabajoRouter");
const piezasRouter = require("./Router/piezaRouter")
const mecanicosRouter = require("./Router/mecanicosRouter")

const app = express();
const PORT = process.env.PORT || 4001;

app.use(cors());
app.use(express.json());

app.use("/api/trabajos", trabajoRouter);
app.use("/api/piezas", piezasRouter)
app.use("/api/mecanico", mecanicosRouter)

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
