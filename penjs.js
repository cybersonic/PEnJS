function PENJS(config){
	this._config = config;
	this._dbname = config.dbname;
	this._dbversion = config.dbversion ? config.dbversion : 1.0;
	this._dbsize = config.dbsize ? config.dbsize : 100000;
	
	this._init();
	return this;
}
/*
	Initialises the framework, i.e. creates tables if it needs to that relate to the objects defined in the config and what have you
	This is a private method
*/
PENJS.prototype._init = function(){
	if(this._config.log){
		this.log("Initialising PENJS");
		this.log(this._config)
	}
	
	
}

PENJS.prototype.getDBType = function(){
	return this._config.dbtype ? this._config.dbtype : new Error("Database Type not defined!");
}

PENJS.prototype.get = function(object){
	
	var rObject = {}; //The object we are going to return 

	
	
	
	//Call the success handler
	if("success" in object){
		object.success(rObject);
	}
	
	//Call the errror handler if they want to handle it
	

	
	return this; //Always return this!
}

PENJS.prototype.list = function(object){
	
	if("success" in object){
		object.success();
	}
	
	return this;
}

PENJS.prototype.save = function(object){
	
	
	if("success" in object){
		object.success();
	}
	return this;
}


PENJS.prototype.deleteObject = function(object){
	
	if("success" in object){
		object.success();
	}
	return this;
}

PENJS.prototype.createTable = function(object){
	this.log("Starting to create a table ", object);
	
	var callback = object.success ? object.success : null;
	
	if("object" in object){ //we have a table to create
	 var create_result = this._createTable(object.object.name, object.object.fields, object.success);
	}

	return this;
}

PENJS.prototype._createTable = function(tablename, fields, callback){
	var database = this._getDatabase();
	
	
	
	if(callback){
		callback();
	}
	
}

PENJS.prototype._getDatabase = function(){
	
	var Database = openDatabase(this._dbname,this._dbversion,this._dbname, this._dbsize);
	this.log("The Database", Database)
	return Database;
}

PENJS.prototype.log = function(message, object) {
	if(this._config.log && "console" in window){
		console.log(message, object);
	}
};
/*
	Used to save remotely if we have to
*/
PENJS.prototype.synch = function(object){
	
}