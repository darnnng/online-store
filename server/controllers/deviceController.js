const { Device } = require("../models/models");

class DeviceController {
  async create(req, res) {
    const { name, price, brandId, typeId, info } = req.body;
  }

  async getAll(req, res) {}

  async getOne(req, res) {}
}

module.exports = new DeviceController();
