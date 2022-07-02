const { Schema, model } = require("mongoose");

//Criando a tabela User
const userSchema = new Schema({
  email: String,

})

module.exports = model("User", userSchema);