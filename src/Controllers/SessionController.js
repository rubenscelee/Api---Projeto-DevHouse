const User = require("../Models/User");


//metos: index, show, update, store, destroy
/*
  index: Listagem de sessões
  show: Listar uma única sessão
  update: Alterar uma sessão
  store: criar uma nova sessão
  destroy: Deletar uma sessão
*/
class SessionController {
  async store(req, res){
    const { email } = req.body;

    let user = await User.findOne({ email });

    if(!user) {
      user = await User.create({ email });
    } 

    res.json(user);
  }
  
}

module.exports = new SessionController();