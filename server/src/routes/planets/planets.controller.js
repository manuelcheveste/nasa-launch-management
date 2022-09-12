const model = require('../../models/planets.model');

function getAllPlanets(req, res) {
  return res.status(200).json(model.getAllPlanets());
}

module.exports = {
  getAllPlanets,
};
