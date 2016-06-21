var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

for(var name in Game.creeps) {
    
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    
    if(upgraders.length < 1) {
        var newName = Game.spawns.Heliopolis.createCreep([WORK, WORK, CARRY, MOVE, MOVE], undefined, {role: 'upgrader'});
    }
    if(harvesters.length < 2) {
        var newName = Game.spawns.Heliopolis.createCreep([WORK, WORK, CARRY, MOVE, MOVE], undefined, {role: 'harvester'});
    }
    
    if(builders.length < 1) {
        var newName = Game.spawns.Heliopolis.createCreep([WORK, WORK, CARRY, MOVE, MOVE], undefined, {role: 'builder'});
    }
    
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