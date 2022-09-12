const express = require('express');

const {
  getAllLaunches,
  addNewLaunch,
  abortLaunch,
} = require('./launches.controller');

const launchesRouter = express.Router();

launchesRouter.get('/', getAllLaunches);
launchesRouter.post('/', addNewLaunch);
launchesRouter.delete('/:id', abortLaunch);

module.exports = launchesRouter;
