const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;
  
  beforeEach(function () {
    park = new Park('DinoCrush', 15);
    dinosaur1 = new Dinosaur('Raptor', 'carnivore', 100);
    dinosaur2 = new Dinosaur('Ryan', 'herbivore', 70);
    dinosaur3 = new Dinosaur('Pterodactyl', 'omnivore', 50)
    dinosaur4 = new Dinosaur('Raptor', 'carvivore', 20)
    });

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'DinoCrush');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 15);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinoCollection();
    assert.strictEqual(actual, 0);
  });
  
  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur('Raptor', 'carnivore', 100);
    const actual = park.dinoCollection();
    assert.deepStrictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.removeDinosaur(dinosaur2)
    const actual = park.dinosaurs
    assert.deepStrictEqual(actual, [dinosaur1])
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    const actual = park.mostPopularDino();
    const expected = dinosaur1
    assert.strictEqual(actual, expected)
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    park.addDinosaur(dinosaur4)
    const actual = park.sameSpecies('Raptor');
    const expected = [dinosaur1, dinosaur4]
    assert.deepStrictEqual(actual, expected);

  });


  it('should be able to calculate the total number of visitors per day', function(){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    park.addDinosaur(dinosaur4)
    const actual = park.averageVisitorsPerDay();
    assert.strictEqual(actual, 240);
  });

  it('should be able to calculate the total number of visitors per year', function(){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    park.addDinosaur(dinosaur4)
    const actual = park.averageVisitorsPerYear();
    assert.strictEqual(actual, 87600);
  });

  it('should be able to calculate total revenue for one year');

});

