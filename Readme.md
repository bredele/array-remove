
# array-remove

  

## Installation

  Install with [component](http://component.io):

    $ component install leafs/array-remove

## Usage

```js
var arr = [1,2,3,4,5];
var remove = require('remove');
var result = remove(arr, function(val){
	return (val % 2 === 0);
});

//arr => [1,3,5]
//result => [2,4]
```


## License

  MIT
