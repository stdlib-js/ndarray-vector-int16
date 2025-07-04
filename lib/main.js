/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var factory = require( '@stdlib/ndarray-vector-ctor' ).factory;


// MAIN //

/**
* Returns a signed 16-bit integer vector (i.e., a one-dimensional ndarray).
*
* @name Int16Vector
* @type {Function}
* @param {(NonNegativeInteger|Collection|ArrayBuffer|Iterable)} [arg] - length, typed array, array-like object, buffer, or iterable
* @param {NonNegativeInteger} [byteOffset=0] - byte offset
* @param {NonNegativeInteger} [length] - view length
* @param {Options} [options] - function options
* @param {boolean} [options.readonly=false] - boolean indicating whether to return a read-only vector
* @param {string} [options.mode='throw'] - specifies how to handle indices which exceed vector dimensions
* @param {string} [options.order='row-major'] - memory layout (either row-major or column-major)
* @throws {TypeError} first argument must be either a length, typed array, array-like object, buffer, iterable, or options object
* @throws {TypeError} must provide valid options
* @returns {ndarray} one-dimensional ndarray
*
* @example
* var numel = require( '@stdlib/ndarray-numel' );
*
* var arr = new Int16Vector();
* // returns <ndarray>
*
* var len = numel( arr );
* // returns 0
*
* @example
* var numel = require( '@stdlib/ndarray-numel' );
*
* var arr = new Int16Vector( 2 );
* // returns <ndarray>
*
* var len = numel( arr );
* // returns 2
*
* @example
* var numel = require( '@stdlib/ndarray-numel' );
*
* var arr = new Int16Vector( [ 1, 2 ] );
* // returns <ndarray>
*
* var len = numel( arr );
* // returns 2
*
* @example
* var numel = require( '@stdlib/ndarray-numel' );
* var ArrayBuffer = require( '@stdlib/array-buffer' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = new Int16Vector( buf );
* // returns <ndarray>
*
* var len = numel( arr );
* // returns 16
*
* @example
* var numel = require( '@stdlib/ndarray-numel' );
* var ArrayBuffer = require( '@stdlib/array-buffer' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = new Int16Vector( buf, 16 );
* // returns <ndarray>
*
* var len = numel( arr );
* // returns 8
*
* @example
* var numel = require( '@stdlib/ndarray-numel' );
* var ArrayBuffer = require( '@stdlib/array-buffer' );
*
* var buf = new ArrayBuffer( 64 );
* var arr = new Int16Vector( buf, 16, 2 );
* // returns <ndarray>
*
* var len = numel( arr );
* // returns 2
*/
var Int16Vector = factory( 'int16' );


// EXPORTS //

module.exports = Int16Vector;
