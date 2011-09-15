function PENJS(config){
	this._config = config;
	
	this._init();
	return this;
}
/*
	Initialises the framework, i.e. creates tables if it needs to that relate to the objects defined in the config and what have you
	This is a private method
*/
PENJS.prototype._init = function(){
	if(this._config.log){
		console.log("Initialising PENJS");
		console.log(this._config)
	}
	

	
	//Let's see what objects we have to create tables with.

	
}

PENJS.prototype.getDBType = function(){
	return this._config.dbtype ? this._config.dbtype : new Error("Database Type not defined!");
}

PENJS.prototype.get = function(object){
	
	var rObject = {}; //The object we are going to return 
	if(this._config.log){
		console.log("get object", object);
	}
	
	if(!object.name){
		//It's the lest we need!
		return new Error("property 'name' is required. Otherwise I don't know what object you want");
	}
	
	
	//Call the success handler
	if("success" in object){
		console.log("Running the success handler", rObject)
		object['success'](rObject);
	}
	
	//Call the errror handler if they want to handle it
	

	
	return this; //Always return this!
}

PENJS.prototype.list = function(object){
	
}

PENJS.prototype.save = function(object){
}


PENJS.prototype.delete = function(object){
	
}

PENJS.prototype.createTable = function(object){
	
}

/*
	Used to save remotely if we have to
*/
PENJS.prototype.synch = function(object){
	
}