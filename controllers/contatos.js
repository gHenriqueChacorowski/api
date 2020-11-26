//recebe o app e exporta 
module.exports = app => {
    app.get('/contatos', (req, res) => res.send('Servidor rodando, tudo ok'));

    app.post('/contatos', (req, res) => {
        console.log(req.body);
        res.send('Post rodando ok')
    });

}