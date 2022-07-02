//importando apenas o módulo Router do express
const {Router}  = require("express");
const SessionController = require("./Controllers/SessionController");
const HouseController = require("./Controllers/HouseController");
const multer = require("multer");
const uploadConfig = require("./config/upload");
const DashboardController = require("./Controllers/DashboardController");

const routes = new Router();

const upload = multer(uploadConfig);

routes.post("/sessions", SessionController.store);

routes.post("/houses", upload.single("thumbnail") , HouseController.store);

routes.get("/houses", HouseController.index);

routes.put("/houses/:house_id", HouseController.update);

routes.delete("/houses", HouseController.destroy);

routes.get("/dashboard", DashboardController.show);

 

module.exports = routes;