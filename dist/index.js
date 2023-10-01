/** @license Apache-2.0 */

'use strict';

/**
* Determine if an array is row-major contiguous.
*
* @module @stdlib/ndarray-base-assert-is-row-major-contiguous
*
* @example
* var isRowMajorContiguous = require( '@stdlib/ndarray-base-assert-is-row-major-contiguous' );
*
* var shape = [ 2, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var bool = isRowMajorContiguous( shape, strides, offset );
* // returns true
*
* @example
* var isRowMajorContiguous = require( '@stdlib/ndarray-base-assert-is-row-major-contiguous' );
*
* var shape = [ 2, 2 ];
* var strides = [ -2, 1 ];
* var offset = 2;
*
* var bool = isRowMajorContiguous( shape, strides, offset );
* // returns false
*
* @example
* var isRowMajorContiguous = require( '@stdlib/ndarray-base-assert-is-row-major-contiguous' );
*
* var shape = [ 2, 2 ];
* var strides = [ 2, 2 ];
* var offset = 0;
*
* var bool = isRowMajorContiguous( shape, strides, offset );
* // returns false
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
