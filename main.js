var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

module.exports.loop = function () {
    
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
        }
    }
    
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    
    
    if(harvesters.length == 0) {
        Game.spawns.Heliopolis.createCreep([WORK, CARRY, MOVE], {role: 'harvester'});
    }
    else if (harvesters.length < 4) {
        Game.spawns.Heliopolis.createCreep([WORK, WORK, CARRY, MOVE, MOVE], {role: 'harvester'});
    }
    
    if(upgraders.length < 2) {
        Game.spawns.Heliopolis.createCreep([WORK, WORK, CARRY, MOVE, MOVE], {role: 'upgrader'});
    }
    
    if(builders.length < 4) {
        Game.spawns.Heliopolis.createCreep([WORK, WORK, CARRY, MOVE, MOVE], {role: 'builder'});
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