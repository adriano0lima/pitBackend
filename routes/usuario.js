const express = require('express');

const router = express.Router();
const index = require('..');


//Rota put -> login
router.put("/usuario/login", async (req, res) => {
    let dados = req.body;

    try {
        const usuario = await index.loginUsuario(dados.senha, dados.email);
        if (usuario == null) {
            return res.json({
                mensagem: `E-mail não cadastrado`
            });
        }
        if (usuario == null) {
            return res.json({
                mensagem: `Senha incorreta`
            });
        }else{
            return res.json({
                mensagem: `Olá ${usuario.nome}!`,
                usuario

            });
        }
    } catch (e) {
        return res.json({
            mensagem: `Erro: ${e}
            Categoria não Editado`
        });
    }
});

//Rota put -> cadastar
router.put("/usuario/cadastrar", async (req, res) => {
    let dados = req.body;

    try {
        const usuario = await index.cadastrarUsuario(dados.nonme, dados.senha, dados.email, dados.idPerfil);
        if (usuario == null) {
            return res.json({
                mensagem: `E-mail já cadastrado`
            });
        }else{
            return res.json({
                mensagem: `Usuario Cadastrado!`,
                usuario

            });
        }
    } catch (e) {
        return res.json({
            mensagem: `Erro: ${e}
            Usuario NÃO Cadastrado!`
        });
    }
});

module.exports = router;
