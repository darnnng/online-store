const ApiError = require("../error/ApiError");

class UserController {
  async registration(req, res, next) {
    const { email, password, role } = req.body;
  }

  async login(req, res) {}

  async check(req, res, next) {
    const { id } = req.query;
    if (!id) {
      return next(ApiError.badRequest("Incorrect ID"));
    }
    res.json(id);
  }
}

module.exports = new UserController();
