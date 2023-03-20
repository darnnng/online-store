const Router = require("express");
const router = new Router();
const typeController = require("../controllers/typeController");

router.post("/", typeController.create); //create
router.get("/", typeController.getAll); //get all types

module.exports = router;
