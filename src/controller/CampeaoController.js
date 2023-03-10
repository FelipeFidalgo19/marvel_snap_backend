

class CampeaoController {
    
    async list (req, res){
        // var token = req.headers['x-access-token'];
        var connection = require("../config");
        let con = connection.connection('local');
        // if (!token) return res.status(401).send({ auth: false, message: 'Nenhum token informado.' });
        con.query('SELECT * FROM campeao', (error, results, fields) => {
            if (error) throw error;
             return res.status(200).json(results);
        });

    }

}

module.exports = new CampeaoController();