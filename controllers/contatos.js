//recebe o app e exporta 
module.exports = app => {
    app.get('/contatos', (req, res) => res.send('Servidor rodando, tudo ok'));
}