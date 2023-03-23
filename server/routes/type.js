const Router = require("express");
const router = new Router();
const typeController = require("../controllers/typeController");
const checkRole = require("../middleware/CheckRole");

router.post("/", checkRole("Admin"), typeController.create); //create
router.get("/", typeController.getAll); //get all types

module.exports = router;
