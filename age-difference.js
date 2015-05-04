'use strict';

var ancestryArray = require('./ancestry');
var parseJson = require('./functions').parseJson;
var average = require('./functions').average;

var ancestryJson = parseJson(ancestryArray);

var byName = {};
ancestryJson.forEach(function(person) {
  byName[person.name] = person;
});

function arrayAdjust(array) {
	for(var i=0; i < array.length; i++)
		if (byName.hasOwnProperty(array[i].mother) == true) {
			var temp = byName[array[i].mother].born;
			array[i].motherBorn = temp;
		}
		else {
			array[i].motherBorn = 0;
		}
};

arrayAdjust(ancestryJson);

function hasKnownMother(obj) {
	return obj.motherBorn != 0;
}

var filtered = ancestryJson.filter(hasKnownMother);

function motherAge(array) {
	for (var i = 0; i < array.length; i++) {
		array[i].motherAge = array[i].born - array[i].motherBorn;
	}
};

motherAge(filtered);

function getMotherAgeArray(array) {
	var motherAgeArray = [];
	for (var i=0; i < array.length; i++) {
		motherAgeArray.push(array[i].motherAge);
	}
	return motherAgeArray;
};

function logOutput () {
	console.log(average(getMotherAgeArray(filtered)));
};

logOutput();



