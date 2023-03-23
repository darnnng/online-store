const Router = require("express");
const router = new Router();
const brandController = require("../controllers/brandController");
const checkRole = require("../middleware/CheckRole");

router.post("/", checkRole("Admin"), brandController.create); //create
router.get("/", brandController.getAll); //get all brands

module.exports = router;
