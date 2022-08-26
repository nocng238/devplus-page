const Router = require("express")
const route = Router()
const campusController = require("../controllers/campusController")

route.get("/api/admin/campus/info/:id", campusController.info)
route.put("/api/admin/campus/edit/:id", campusController.edit)
route.get("/api/admin/campus/infoAll",campusController.infoAll)
route.post("/api/admin/campus/create",campusController.create)
route.delete("/api/admin/campus/delete/:id",campusController.delete)

module.exports = route