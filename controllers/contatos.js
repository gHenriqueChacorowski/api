//recebe o app e exporta 
const Contato = require("../models/contatos");

module.exports = app => {
    app.get('/contatos', (req, res) => {
        Contato.lista(res);
        res.send('Listando');
    });

    app.get('/contatos/:id', (req, res) => {
        const id = parseInt(req.params.id);

        Contato.listaId(id, res);
    })

    app.post('/contatos', (req, res) => {
        const contato = req.body;

        Contato.adiciona(contato, res);
    });

    app.patch('/contatos/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const values = req.body;

        Contato.altera(id, values, res);
    })

    app.delete('/contatos/:id', (req, res) => {
        const id = parseInt(req.params.id);

        Contato.deleta(id, res);
    })

}