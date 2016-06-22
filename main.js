var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

for(var name in Game.creeps) {
    
    
    
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    
    
    if(harvesters.length < 3) {
        Game.spawns.Heliopolis.createCreep([WORK, WORK, CARRY, MOVE, MOVE], {role: 'harvester'});
        
    }
    
    if(upgraders.length < 1) {
        Game.spawns.Heliopolis.createCreep([WORK, WORK, CARRY, MOVE, MOVE], {role: 'upgrader'});
    }
    
    if(builders.length < 3) {
        Game.spawns.Heliopolis.createCreep([WORK, WORK, CARRY, MOVE, MOVE], {role: 'builder'});
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
    
    //for(var name in Memory.creeps) {
        //if(!Game.creeps[name]) {
            //delete Memory.creeps[name];
        //}
    //}
    
}   