const express = require('express');

const router = express.Router();
const index = require('..');

//Rota post -> setCarrinho
router.post("/carrinho", async (req, res) => {
    let dados = req.body;

    try {
        const novoCarrinho = await index.adicinarCarrinho(dados.quantidade, dados.idProduto, dados.idUsuario);
        if (novoCarrinho != null) {
            return res.json({
                mensagem: "Produto adicionado ao carrinho",
                novoCarrinho
            });
        }
        else {
            return res.json({
                mensagem: `Produto não adicionado`
            });
        }
    } catch (e) {
        return res.json({
            mensagem: `Erro: ${e}
            Produto não adicionado`
        });
    }
});

//Rota put -> updateCategoria
router.put("/carrinho", async (req, res) => {
    let dados = req.body;

    try {
        const categoria = await index.updateCarrinho(dados);
        return res.json({
            mensagem: "Carrinho Editado com sucesso",
            categoria
        });
    } catch (e) {
        return res.json({
            mensagem: `Erro: ${e}
            Carrinho não Editado`
        });
    }
});

//Rota delete -> deleteCarrinho
router.delete('/carrinho/:id', async (req, res) => {
    const dados = req.params;
    try {
        const categoria = await index.deleteCarrinho(dados.id);

        if (categoria) {
            res.json({ message: "Produto removido com sucesso" });
        } else {
            res.status(404).json({ message: "Produto não encontrado" });
        }
    } catch (error) {
        console.error("Erro ao deletar carrinho:", error);
        res.status(500).json({ message: "Erro interno do servidor" });
    }

});

module.exports = router
