var remove = require('remove');
var assert = require('assert');

function equal(obj1, obj2) {
	return JSON.stringify(obj1) === JSON.stringify(obj2);
}

describe('remove', function(){
  it('removes all elements from an array that the callback returns true', function(){
		var array = [1, 2, 3, 4, 5, 6];
		var result = remove(array, function(val){
			return (val % 2 === 0);
		});
		assert(equal(arr, [1,3,5]) === true);
		assert(equal(result, [2,4,6]) === true);
  });

});
