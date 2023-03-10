

class CartasController {
    
    async list_all (req, res){
        // var token = req.headers['x-access-token'];
        // if (!token) return res.status(401).send({ auth: false, message: 'Nenhum token informado.' });
        var connection = require("../config");
        let con = connection.connection('local');
        con.query('SELECT * FROM cartas', (error, results, fields) => {
            if (error) throw error;
                return res.status(200).json(results);
          });
    }
    async create_carta (req, res){
        // var token = req.headers['x-access-token'];
        // if (!token) return res.status(401).send({ auth: false, message: 'Nenhum token informado.' });
        let body = req.body;
        var connection = require("../config");
        let con = connection.connection('local');
        if(body.nome != ""){
        con.query('insert into cartas (nome,tipo,energia,poder,link_img,id_deck) values("'+body.nome+'","'+body.tipo+'",'+body.energia+','+body.poder+',"'+body.link+'",'+body.id_deck+');', (error, results, fields) => {
            if (error) throw error;
                return res.status(200).json(results);
          });
        }else{
            return res.status(500).json({'Erro 500' : 'Erro de conexão com banco de dados!'});            
        }
    }
    async find_id_deck_campeao (req, res){
        // var token = req.headers['x-access-token'];
        // if (!token) return res.status(401).send({ auth: false, message: 'Nenhum token informado.' });
        let params = req.params;
        var connection = require("../config");
        let con = connection.connection('local');
        if(params.id_campeao != "" ){
        con.query('select d.id as id_deck, d.nome as nome_deck, d.descricao, d.id_campeao, c.id as id_carta, c.nome as nome_carta, c.tipo, c.energia, c.poder, c.link_img from deck d inner join cartas c on d.id = c.id_deck where d.id_campeao ='+params.id_campeao+';', (error, results, fields) => {
            if (error) throw error;
                return res.status(200).json(results);
          });
        }else{
            return res.status(500).json({'Erro 500' : 'Erro de conexão com banco de dados!'});            
        }
    }

    async add_card_deck (req, res){
        // var token = req.headers['x-access-token'];
        // if (!token) return res.status(401).send({ auth: false, message: 'Nenhum token informado.' });
        let params = req.params;
        var connection = require("../config");
        let con = connection.connection('local');
        if(params.id_campeao != "" ){
        con.query('update cartas set id_deck = '+params.id_deck+' where id = '+params.id_card+';', (error, results, fields) => {
            if (error) throw error;
                return res.status(200).json(results);
          });
        }else{
            return res.status(500).json({'Erro 500' : 'Erro de conexão com banco de dados!'});            
        }
    }
    
    async find_id_card_delete (req, res){
        // var token = req.headers['x-access-token'];
        // if (!token) return res.status(401).send({ auth: false, message: 'Nenhum token informado.' });
        let params = req.params;
        var connection = require("../config");
        let con = connection.connection('local');
        if(params.id_campeao != "" ){
        con.query('DELETE FROM cartas WHERE id = '+params.id_card+';', (error, results, fields) => {
            if (error) throw error;
                return res.status(200).json(results);
          });
        }else{
            return res.status(500).json({'Erro 500' : 'Erro de conexão com banco de dados!'});            
        }
    }

}

module.exports = new CartasController();