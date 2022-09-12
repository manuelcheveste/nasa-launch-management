const launches = new Map();

let latestFlightNumber = 100;

const launch = {
  flightNumber: 100,
  mission: 'Kepler Exploration X',
  rocket: 'Explorer IS1',
  launchDate: new Date('December 27, 2030'),
  target: 'Kepler-442 b',
  customers: ['ZTM', 'NASA'],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
  return Array.from(launches.values());
}

function addNewLaunch(launch) {
  latestFlightNumber++;
  launches.set(latestFlightNumber, {
    ...launch,
    success: true,
    upcoming: true,
    customers: ['ZTM', 'NASA'],
    flightNumber: latestFlightNumber,
  });
  return launches.get(latestFlightNumber);
}

function launchExists(flightNumber) {
  return launches.has(flightNumber);
}

function abortLaunch(flightNumber) {
  const aborted = launches.get(flightNumber);
  aborted.upcoming = false;
  aborted.success = false;
  return aborted;
}

module.exports = {
  getAllLaunches,
  addNewLaunch,
  launchExists,
  abortLaunch,
};
