const Router = require("express");
const router = new Router();
const brandController = require("../controllers/brandController");

router.post("/", brandController.create); //create
router.get("/", brandController.getAll); //get all brands

module.exports = router;
