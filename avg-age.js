'use strict';

var ancestryArray = require('./ancestry');
var parseJson = require('./functions').parseJson;
var average = require('./functions').average;

var ancestryJson = parseJson(ancestryArray);

function addCentury (array) {
	for (var i = 0; i < array.length; i++) {
		var temp = Math.ceil(array[i].died / 100);
		array[i].century = temp;
	}
};

addCentury(ancestryJson);

var sixteenth = [];
var seventeenth = [];
var eighteenth = [];
var nineteenth = [];
var twentieth = [];
var twentyFirst = [];

function groupByCentury(array) {
	for (var i = 0; i < array.length; i++) {
	switch (array[i].century) {
		case 16:
			sixteenth.push(array[i].died - array[i].born);
			break;
		case 17:
			seventeenth.push(array[i].died - array[i].born);
			break;
		case 18:
			eighteenth.push(array[i].died - array[i].born);
			break;
		case 19:
			nineteenth.push(array[i].died - array[i].born);
			break;
		case 20:
			twentieth.push(array[i].died - array[i].born);
			break;
		case 21:
			twentyFirst.push(array[i].died - array[i].born);
			break;
		}
	}
};

groupByCentury(ancestryJson);

function logOutput () {
	console.log(average(sixteenth));
	console.log(average(seventeenth));
	console.log(average(eighteenth));
	console.log(average(nineteenth));
	console.log(average(twentieth));
	console.log(average(twentyFirst));
};

logOutput();
