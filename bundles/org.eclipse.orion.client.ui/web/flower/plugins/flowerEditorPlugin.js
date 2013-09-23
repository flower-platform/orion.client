define([
	'orion/plugin'
	], function(PluginProvider) {
	
	var headers = {
		name: "Flower Platform Editor Plugin",
		version: "1.0",
		description: "This plugin provides editor ..."
	};

	var provider = new PluginProvider(headers);
	provider.registerServiceProvider("orion.page.content", {}, {
	     id: "orion.flower.content",
	     name: "Flower",	   
	     uriTemplate: "http://www.w3schools.com"
	});
	     
	provider.registerServiceProvider("orion.edit.editor", {}, {
		id: "orion.flower",
	    name: "Flower Platform Editor",
	    uriTemplate: "{OrionHome}/flower/flowerContent.html#{Location},contentProvider=orion.flower.content"
	});
	     
	provider.registerServiceProvider("orion.navigate.openWith", {}, {
		editor: "orion.flower",
	    contentType: ["image/gif", "image/jpeg", "image/ico", "image/png","image/tiff"]
	});
		
	provider.connect();
});