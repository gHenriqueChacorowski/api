class Tabelas {
    init(conexao){
        this.conexao = conexao;
        this.criarContatos();
    }

    criarContatos() {
        const sql = 'CREATE TABLE IF NOT EXISTS Contatos (id int NOT NULL AUTO_INCREMENT, nome varchar(50) NOT NULL, telefone varchar(40) NOT NULL, email varchar(50) NOT NULL, PRIMARY KEY(id))'
        this.conexao.query(sql, (erro) => {
            if(erro){
                console.log(erro);
            } else {
                console.log('Tabela contatos criada com sucesso');
            }
        })
    }
}

module.exports = new Tabelas;