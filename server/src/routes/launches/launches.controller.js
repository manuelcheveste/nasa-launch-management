const model = require('../../models/launches.model');
const planetsModel = require('../../models/planets.model');

function getAllLaunches(req, res) {
  return res.status(200).json(model.getAllLaunches());
}

function addNewLaunch(req, res) {
  const launch = req.body;

  if (launch.mission === undefined && typeof launch.mission !== 'string') {
    return res.status(400).json({
      error: 'Missing required mission property',
    });
  }

  if (launch.rocket === undefined && typeof launch.rocket !== 'string') {
    return res.status(400).json({
      error: 'Missing required rocket property',
    });
  }

  const launchDate = new Date(launch.launchDate);
  if (isNaN(launchDate)) {
    return res.status(400).json({
      error: 'Invalid launchDate property',
    });
  } else if (launchDate < Date.now()) {
    return res.status(400).json({
      error: 'Invalid launchDate property',
    });
  }

  if (launch.target === undefined && typeof launch.target !== 'string') {
    return res.status(400).json({
      error: 'Missing required target property',
    });
  } else if (!planetsModel.planetExists(launch.target)) {
    return res.status(400).json({
      error: 'Invalid target property',
    });
  }

  launch.launchDate = launchDate;
  const newLaunch = model.addNewLaunch(launch);
  return res.status(201).json(newLaunch);
}

function abortLaunch(req, res) {
  const launchId = Number(req.params.id);
  if (!model.launchExists(launchId)) {
    return res.status(404).json({
      error: 'Launch not found',
    });
  }
  const aborted = model.abortLaunch(launchId);
  return res.status(200).json(aborted);
}

module.exports = {
  getAllLaunches,
  addNewLaunch,
  abortLaunch,
};
