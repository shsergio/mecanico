const express = require("express");
const cors = require("cors");
const trabajoRouter = require("./Router/trabajoRouter");

const app = express();
const PORT = process.env.PORT || 4001;

app.use(cors());
app.use(express.json());

app.use("/api/trabajos", trabajoRouter);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
