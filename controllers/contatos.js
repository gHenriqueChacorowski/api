//recebe o app e exporta 
const Contato = require("../models/contatos");

module.exports = app => {
    app.get('/contatos', (req, res) => res.send('Servidor rodando, tudo ok'));

    app.post('/contatos', (req, res) => {
        const contato = req.body

        Contato.adiciona(contato);
        res.send('Post rodando ok')
    });

}