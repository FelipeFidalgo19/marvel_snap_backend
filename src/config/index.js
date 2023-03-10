
const mysql = require('mysql');
class config {

    connection(envirement) {

        if(envirement == ""){
            return "empty";
        }

        switch(envirement)
        {
            case "local":
                //local
                const connection = mysql.createConnection({
                    host     : 'localhost',
                    port     : 3333,
                    user     : 'root',
                    password : '',
                    database : 'marvel_snap'
                });

                return connection;
        }
    }
}

module.exports = new config();