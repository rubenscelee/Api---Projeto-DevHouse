const { json } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

class App{

  constructor(){
    this.server = express();
    
    mongoose.connect("mongodb+srv://devhouse:devhouse@devhouse.grh13.mongodb.net/devhouse?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    
    //Quando carregar o construtor, os metódos serão chamados
    this.middlewares();
    this.routes();
  }


  middlewares(){
    this.server.use(express.json());


  }

  routes(){
    this.server.use(routes);


  }

}

//exportando apenas o server da classe
module.exports = new App().server;