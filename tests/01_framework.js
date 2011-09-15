$(document).ready(function(){
	module("Config variable test");
	test("Config test", function()
	{
		expect(2);
		equals(new PENJS({dbtype: "html"}).getDBType(), "html", "Method getDBType not implemented");
		//Check that it throws errors if not implemented
		raises(new PENJS({}).getDBType());
	});

	module("Object Definition");
	test("test success handlers", function(){
	  	expect(5);
		stop();
		var config = {
			dbtype:"html",
			dbname:"testdb1",
			log: true
			};//end config
		var penjs = new PENJS(config);
		
		
		setTimeout(function(){
			penjs.get({
					id:1, 
					success: function(data){
						ok(true, "get");
					}
				})
				.list({
					success: function(data){
						ok(true, "list");
					}
				})
				.save({
					success:function(data){
						ok(true, "save");
					}
				})
				.deleteObject({
					success:function(data){
						ok(true, "deleteObject");
					}
				})
				.createTable({
					success:function(data){
						ok(true, "createTable");
					}
				});
			start();
			
		},100);
	});
	
	test("Get the Database for HTML5", function(){
		expect(1);
			var config = {
				dbtype:"html",
				dbname:"testdb1",
				log: true,
				objects:[
							{	name:"TestObject",
					 			fields: []
							}
						]
				};//end config
			var penjs = new PENJS(config);
			var db = penjs._getDatabase();
			ok(db, "got the database");
		
		
	});
	
	test("Create Table for a simple Object (should only have an id)", function(){
		expect(1);
		stop();	
			var config = {
				dbtype:"html",
				dbname:"testdb1",
				log: true,
				objects:[
							{	name:"TestObject",
					 			fields: []
							}
						]
				};//end config
			var penjs = new PENJS(config);
			
			penjs.createTable({
				object:config.objects[0], //The table we are going to create
				success: function(data){
					ok(true, "createTable");
				}
			});
			
		
	});
	


});