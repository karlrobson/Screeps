var roleBuilder = {
    
    run: function(creep){
    
        
		if(creep.memory.building && creep.carry.energy == 0) {
                creep.memory.building = false;
        }
        if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
            creep.memory.building = true;
        }
        
        
        if(creep.memory.building) {
	        var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            if(targets.length) {
                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            }
        }
	    if(creep.memory.building) {
    	    var toRepair = creep.room.find(FIND_STRUCTURES);
    	    if(toRepair.length) {
                if(toRepair.hits < toRepair.hitsMax){
        			if(creep.repair(toRepair[0]) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(toRepair[0]);
                    }
                }
    	    }
	    }
	    
        
	    else {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
        }
        //if(creep.memory.building == false){
	       //creep.room.find(FIND_FLAGS);
	        //creep.moveTo.flags.Flag1;
	    //}
    }
};

module.exports = roleBuilder;