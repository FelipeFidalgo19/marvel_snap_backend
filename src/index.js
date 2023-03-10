const express = require("express");
const server = express();
const cors = require('cors');



server.use(cors("*"));
server.use(express.json());


server.use(function (req, res, next){
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});

const UsuarioRoute = require("./routes/UsuarioRoute");
const CampeaoRoute = require("./routes/CampeaoRoute");
const CombateRoute = require("./routes/CombateRouter");
const CartasRouter = require("./routes/CartasRouter");
const DeckRoute = require("./routes/DeckRouter.js");

server.use('/user' , UsuarioRoute); 
server.use('/campaeo' , CampeaoRoute); 
server.use('/deck' , DeckRoute);
server.use('/combate' , CombateRoute);
server.use('/cartas' , CartasRouter);





var localhost = "168.138.242.109";
var port = 8082;

server.listen(port, () => {
  console.log(`Host: http://${localhost}:${port}`);
});


module.exports = server;