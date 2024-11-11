const express = require("express");
const app = express();

const port = process.env.PORT || 3001;



app.use(express.json());

const carrinho = require("./routes/carrinho");
const categoria = require("./routes/categoria");
const perfil = require("./routes/perfil");
const produto = require("./routes/produto");
const usuario = require("./routes/usuario");

app.use("/", carrinho);
app.use("/", categoria);
app.use("/", perfil);
app.use("/", produto);
app.use("/", usuario);

module.exports = async (req, res) => {
    res.status(200).send("Olá Mundo! \n servidor iniciano na porta:" + port );
  };
  
/*
app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
});
*/