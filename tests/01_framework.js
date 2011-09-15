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
	test("asyncTest", function(){
		stop();
		expect(2);
		setTimeout(function(){
			ok(true, 'success');
			
			$.ajax({
				url: "test_responder.html", 
				success: function(){
					ok(true, "ajax success");
					start();
				}
			});
		}, 100);
	});
	
	
	test("Methods in the framework", function(){
	  	expect(2);
		stop();
		var config = {
			dbtype:"html",
			dbname:"testdb1",
			log: true
			};//end config
		var penjs = new PENJS(config);
		
		
		setTimeout(function(){
			ok(true, 'done the starting of the timeout');
			penjs.get({
					id:1, 
					success: function(data){
						ok(true, "get success");
						ok(data, "got some data");					
					}
				});
			start();
			
		},100);
	});
	

});