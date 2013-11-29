
/**
 * Expose 'Mod'
 */

module.exports = function(arr, cb) {
	var l = arr.length,
			cache = [];
	while(l--) {
		if(cb(arr[l])) cache.push(arr.splice(l,1));
	}
	return cache;
};