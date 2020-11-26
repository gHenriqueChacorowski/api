const conexao = require('../infraestrutura/conexao');

class Contato {
    adiciona(contato) {
        const sql = "INSERT INTO contatos SET ?"
        
        conexao.query(sql, contato, (erro, resultados) => {
            if(erro){
                console.log(erro);
            } else {
                console.log(resultados);
            }
        })
    }
}

module.exports = new Contato