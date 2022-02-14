const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation;
  })
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation;
  })
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return sameTransport = this.journeys.filter((journey) => {
    return journey.transport === transport;
  })
  return sameTransport;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return longJourneys = this.journeys.filter((journey) => {
    return journey.distance > minDistance;
  })
  return longJourneys;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((totalDistance, journey) => {
    return totalDistance += journey.distance;
    }, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  return this.journeys.map((journey) => {
    return journey.transport;
  })
  .filter((transport, index, array) => {
    return array,indexOf(transport) === index;
  })
};

// var transportWays = []
//     for (var i = 0; i < this.journeys.length; i++)
//       if (this.journeys[i].transport != transportWays);
//         transportWays.push(this.journeys[i].transport)

module.exports = Traveller;
