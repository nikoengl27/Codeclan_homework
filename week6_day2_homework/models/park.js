const Dinosaur = require("./dinosaur");

const Park = function(name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
};

Park.prototype.dinoCollection = function(){
    return this.dinosaurs.length;
};

Park.prototype.addDinosaur = function(dinosaur) {
    this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function(dinosaur){
    const indexOfDinosaur = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(indexOfDinosaur, 1);
};

// Park.prototype.mostVisits = function(dinosaur){
//     let views = 0
//     for(dino of this.dinosaurs){
//         if (dinosaur.guestsAttractedPerDay > views){
//             ;
//         }
//     }
// }

Park.prototype.mostPopularDino = function(){
    let visitorCount = 0;
    for (let dinosaur of this.dinosaurs){
        if (dinosaur.guestsAttractedPerDay > visitorCount){
            visitorCount = dinosaur.guestsAttractedPerDay
        };
    };

    let popularDino;
    for (let dinosaur of this.dinosaurs){
        if (dinosaur.guestsAttractedPerDay === visitorCount){
            popularDino = dinosaur;
        } 
    }
    return popularDino;
}

Park.prototype.sameSpecies = function(species) {
    let speciesArray = [];
    for (let dinosaur of this.dinosaurs) {
        if (dinosaur.species === species) {
            speciesArray.push(dinosaur);
        };
    };
    return speciesArray;
};


Park.prototype.averageVisitorsPerDay = function () {
    let averageDailyVisitors = 0;
  
    for (const dinosaur of this.dinosaurs) {
      averageDailyVisitors += dinosaur.guestsAttractedPerDay;
    }
  
    return averageDailyVisitors;
};

Park.prototype.averageVisitorsPerYear = function (){
    return this.averageVisitorsPerDay() * 365;
};

module.exports = Park;
