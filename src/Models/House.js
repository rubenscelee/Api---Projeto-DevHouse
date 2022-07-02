const { Schema, model } = require("mongoose");

//Criando a tabela House
const houseSchema = new Schema({
  description: String,
  price: Number,
  location: String,
  status: Boolean,
  user: {
    //
    type: Schema.Types.ObjectId,
    ref: "User"
  }

});

module.exports = model("House", houseSchema);