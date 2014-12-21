/**
 * A mime-type sniffer for binary files by using magic numbers instead of
 * just reading the extensions
 * 
 */

var debug = require('debug')('mime-sniffer');
var fs = require('fs');
var path = require('path');

// the length of bytes to check for the magic numbers
var length = 24;
// the database of magic numbers
var map = exports.database = require('./lib/numbers.js');
var keys = Object.keys(map);


var lookup = exports.lookup = function(file, done) {
	
	if (!file) return done(new Error('Must pass a file path'));
	
	fs.open(file, 'r', function(stat, fd) {
		var buffer = new Buffer(length);
		fs.read(fd, buffer, 0, length, 0, function(err) {
			if (err) return done(err);
			var magic = buffer.toString('hex');
			// if the keys contain the magic number somewhere
			var key = contains(keys, magic);
			var result = key ? map[key] : false;
			if (!result) {
				debug('No magic number match for:' + ' ' + magic);
				return done(new Error('No magic number match for ' + file));
			}
			return done(null, result);
		});
		
	});
}

/**
 * Check if an element in the array contains the given search.
 * If it matches, we return the item, otherwise we return false
 * 
 * @param {Array} arr
 * @param {String} search
 * @returns {Object}
 */
function contains(arr, search) {
	for (var i = 0, l = arr.length; i < l; i++) {
		var value = arr[i];
		if (!!~search.toLowerCase().indexOf(value.toLowerCase())) {
			return value;
		}
	}
	return false;
}