var roleUpgrader = {
    
    run: function(creep) {
        //Transfer energy to creep from spawn or extension
        if(creep.carry.energy == 0) {
            var loc = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN)
                }});
            if(loc[0].transferEnergy(creep) == ERR_NOT_IN_RANGE) {
                creep.moveTo(loc[0]);
            }
            //var sources = creep.room.find(FIND_SOURCES);
            //if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                //creep.moveTo(sources[0]);
            //}
        }
        //Upgrades the controller
        else {
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }  
        }
    }
};

module.exports = roleUpgrader;
