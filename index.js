
/**
 * Remove.
 * @param {Array} arr 
 * @param {Function} cb 
 * @return {Array} array of removes items
 * @api public
 */

module.exports = function(arr, cb) {
  var l = arr.length,
      cache = [];
  while(l--) {
    if(cb(arr[l])) cache.unshift(arr.splice(l,1)[0]);
  }
  return cache;
};