

class CombateController {    

    async list_all (req, res){
        // var token = req.headers['x-access-token'];
        // if (!token) return res.status(401).send({ auth: false, message: 'Nenhum token informado.' });
        var connection = require("../config");
        let con = connection.connection('local');
        con.query('SELECT * FROM combate', (error, results, fields) => {
            if (error) throw error;
                return res.status(200).json(results);
        });
    }
    async register_combate (req, res){
        // var token = req.headers['x-access-token'];
        // if (!token) return res.status(401).send({ auth: false, message: 'Nenhum token informado.' });
        let body = req.body;
        var connection = require("../config");
        let con = connection.connection('local');
        con.query('insert into combate(id_deck,id_campeao,resultado,data_combate,snap_point) values('+body.id_deck+','+body.id_campeao+',"'+body.resultado+'","'+body.data+'",'+body.snap_point+');', (error, results, fields) => {
            if (error) throw error;
                return res.status(200).json(results);
        });
    }

}

module.exports = new CombateController();