var autoRespawn = {

    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    
    //If there are no harvester creeps then spawn a basic harvester, otherwise spawn a bigger one if there are less than 4
    if(harvesters.length == 0) {
        Game.spawns.Heliopolis.createCreep([WORK, CARRY, MOVE], {role: 'harvester'});
    }
    else if (harvesters.length < 4) {
        Game.spawns.Heliopolis.createCreep([WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE], {role: 'harvester'});
    }
    
    //Spawn an upgrader if there are less than 1
    if(upgraders.length < 1) {
        Game.spawns.Heliopolis.createCreep([WORK, WORK, CARRY, MOVE, MOVE], {role: 'upgrader'});
    }
    
    //Spawn a builder if there are less than 4
    if(builders.length < 4) {
        Game.spawns.Heliopolis.createCreep([WORK, WORK, CARRY, MOVE, MOVE], {role: 'builder'});
    }
};
    
module.exports = autoRespawn;