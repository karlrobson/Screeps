var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
//var autoSpawn = require('auto.respawn');

module.exports.loop = function () {
    //Memory cleanup
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
        }
    }
    
    //if(Game.creeps.length < 9) {
        //autoSpawn.run();
    //}
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    
    //If there are no harvester creeps then spawn a basic harvester, otherwise spawn a bigger one if there are less than 4
    if(harvesters.length == 0) {
       Game.spawns.Heliopolis.createCreep([WORK, CARRY, MOVE], {role: 'harvester'});
    }
    else if (harvesters.length < 4) {
        Game.spawns.Heliopolis.createCreep([WORK, WORK, WORK, CARRY, MOVE, MOVE, MOVE], {role: 'harvester'});
    }
    else if (harvesters.length > 2) {
        //Spawn an upgrader if there are less than 1
        if(upgraders.length < 1) {
            Game.spawns.Heliopolis.createCreep([WORK, WORK, CARRY, MOVE, MOVE], {role: 'upgrader'});
        }
        
        //Spawn a builder if there are less than 4
        if(builders.length < 4) {
            Game.spawns.Heliopolis.createCreep([WORK, WORK, CARRY, MOVE, MOVE], {role: 'builder'});
        }
    }
    
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
            if(creep.memory.role == 'harvester') {
                roleHarvester.run(creep);
            }
            if(creep.memory.role == 'upgrader') {
                roleUpgrader.run(creep);
            }
            if(creep.memory.role == 'builder'){
                roleBuilder.run(creep);
            }
            
    }
}   
