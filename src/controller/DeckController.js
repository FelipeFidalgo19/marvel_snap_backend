

class DeckController {    

    async list (req, res){
        // var token = req.headers['x-access-token'];
        // if (!token) return res.status(401).send({ auth: false, message: 'Nenhum token informado.' });
        var connection = require("../config");
        let con = connection.connection('local');
        con.query('SELECT * FROM deck', (error, results, fields) => {
            if (error) throw error;
                return res.status(200).json(results);
            });
    }
    async criateDeck (req, res){
        // var token = req.headers['x-access-token'];
        // if (!token) return res.status(401).send({ auth: false, message: 'Nenhum token informado.' });
        var connection = require("../config");
        let con = connection.connection('local');
        con.query('insert into deck (nome,descricao,id_campeao) values("'+req.body.nome_deck+'","'+req.body.descricao+'",'+req.body.id_campeao+');', (error, results, fields) => {
            if (error) throw error;
                return res.status(200).json(results);
            });
    }
    async list_cards_deck (req, res){
        // var token = req.headers['x-access-token'];
        // if (!token) return res.status(401).send({ auth: false, message: 'Nenhum token informado.' });
        var connection = require("../config");
        let con = connection.connection('local');
        if(req.params.id_deck!=""){
            con.query('select d.id as id_deck, d.nome as nome_deck, d.descricao, d.id_campeao, c.id as id_carta, c.nome as nome_carta, c.tipo, c.energia, c.poder, c.link_img from deck d inner join cartas c on d.id = c.id_deck where c.id_deck = '+req.params.id_deck+';', (error, results, fields) => {
                if (error) throw error;
                    return res.status(200).json(results);
            });
        }else{
            return res.status(404).json({'Erro 404' : 'É necessario informar uma valor de id!'});            
        }
    }

}

module.exports = new DeckController();