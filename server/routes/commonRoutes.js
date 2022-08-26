const Router = require("express");
const route = Router();
const commonController = require("../controllers/commonController");

route.post("/api/admin/common/create", commonController.create);
route.post("/api/admin/common/edit", commonController.edit);
route.get("/api/admin/common/infoAll", commonController.infoAll);
route.put("/api/admin/common/addConcern", commonController.addConcern);
route.put("/api/admin/common/delete/:id", commonController.deleteConcern);
route.put("/api/admin/common/editConcern/:id", commonController.editConcern);
module.exports = route;
