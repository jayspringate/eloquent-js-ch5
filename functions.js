'use strict';

module.exports = exports = {};

exports.average = function (array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
};

exports.parseJson = function (array) {
	var parsed = [];
	for(var i=0; i < array.length; i++) {
		parsed.push(JSON.parse(array[i]));
	}
	return parsed;
};