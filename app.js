var app = require('express')();


app.get('/character/:name',function(req,res){
	/*
		Should return an UI with data about the given character.
		api call (https://swapi.co/people
	
	*/
	

	});


app.get('/characters',function(req,res){
	/*
		Returns raw JSON of sorted 50 characters based on query parameter . Parameter can be ['name', 'mass', 'height']
	

	*/

	

	});


app.get('/planetresidents',function(req,res){
	/*

	Return raw JSON in the form {planetName1: [characterName1, characterName2], planetName2: [characterName3]}.Paginate upto 3 characters per planet. 

	*/


	});
