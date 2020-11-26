const conexao = require('../infraestrutura/conexao');

class Contato {
    adiciona(contato, res) {
        const nomeEhValido = contato.nome.length >= 5;

        const validacoes = [
            {
                nome: 'nome',
                valido: nomeEhValido,
                mensagem: 'Nome deve ter no minimo 5 caracteres'
            }
        ]

        const erros = validacoes.filter(campo => !campo.valido);

        if(erros.length){
            res.status(400).json(erros);
        } else {
            const sql = "INSERT INTO contatos SET ?"
        
            conexao.query(sql, contato, (erro, resultados) => {
                if(erro){
                    res.status(400).json(erro);
                } else {
                    res.status(200).json(resultados);
                }
            })
        } 
    }

    lista(res){
        const sql = "SELECT * FROM contatos"

        conexao.query(sql, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultados);
            }
        })
    }

    listaId(id, res){
        const sql = "SELECT * FROM contatos WHERE id = ?"

        conexao.query(sql, id, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultados);
            }
        })
    }

    deleta(id, res){
        const sql = "DELETE FROM contatos WHERE id = ?"

        conexao.query(sql, id, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultados);
            }
        })
    }

    altera(id, values, res){
        const sql = "UPDATE contatos SET ? WHERE id = ?"

        conexao.query(sql, [values, id], (erro, resultados) => {
            if(erro){
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultados);
            }
        })
    }
}

module.exports = new Contato