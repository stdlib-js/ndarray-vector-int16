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

/* eslint-disable no-new */

'use strict';

// MODULES //

var tape = require( 'tape' );
var isndarrayLikeWithDataType = require( '@stdlib/assert-is-ndarray-like-with-data-type' );
var isEqualInt16Array = require( '@stdlib/assert-is-equal-int16array' );
var isReadOnly = require( '@stdlib/ndarray-base-assert-is-read-only' );
var ArrayBuffer = require( '@stdlib/array-buffer' );
var Float64Array = require( '@stdlib/array-float64' );
var Int16Array = require( '@stdlib/array-int16' );
var getData = require( '@stdlib/ndarray-data-buffer' );
var array2buffer = require( '@stdlib/buffer-from-array' );
var Int16Vector = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Int16Vector, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an invalid first argument', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			new Int16Vector( value );
		};
	}
});

tape( 'the function throws an error if provided an invalid first argument (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			new Int16Vector( value, {} );
		};
	}
});

tape( 'the function throws an error if provided an invalid first argument (byteoffset)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			new Int16Vector( value, 0 );
		};
	}
});

tape( 'the function throws an error if provided an invalid first argument (byteoffset, options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			new Int16Vector( value, 0, {} );
		};
	}
});

tape( 'the function throws an error if provided an invalid first argument (byteoffset, length)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			new Int16Vector( value, 0, 1 );
		};
	}
});

tape( 'the function throws an error if provided an invalid first argument (byteoffset, length, options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			new Int16Vector( value, 0, 1, {} );
		};
	}
});

tape( 'the function throws an error if provided an invalid byte offset argument', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			new Int16Vector( new ArrayBuffer( 8 ), value );
		};
	}
});

tape( 'the function throws an error if provided an invalid byte offset argument (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			new Int16Vector( new ArrayBuffer( 8 ), value, {} );
		};
	}
});

tape( 'the function throws an error if provided an invalid byte offset argument (length)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			new Int16Vector( new ArrayBuffer( 8 ), value, 1 );
		};
	}
});

tape( 'the function throws an error if provided an invalid byte offset argument (length, options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			new Int16Vector( new ArrayBuffer( 8 ), value, 1, {} );
		};
	}
});

tape( 'the function throws an error if provided an invalid length argument', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			new Int16Vector( new ArrayBuffer( 8 ), 0, value );
		};
	}
});

tape( 'the function throws an error if provided an invalid length argument (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			new Int16Vector( new ArrayBuffer( 8 ), 0, value, {} );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (length)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			new Int16Vector( 10, value );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (array)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			new Int16Vector( [], value );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (arraybuffer)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		true,
		false,
		null,
		void 0,
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			new Int16Vector( new ArrayBuffer( 8 ), value );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (arraybuffer, byteoffset)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		true,
		false,
		null,
		void 0,
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			new Int16Vector( new ArrayBuffer( 8 ), 0, value );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (arraybuffer, byteoffset, length)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			new Int16Vector( new ArrayBuffer( 8 ), 0, 1, value );
		};
	}
});

tape( 'the function throws an error if provided an `order` option which is not a recognized order', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'ROW',
		'row',
		'col-major',
		'col',
		'major',
		'minor',
		null
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			new Int16Vector({
				'order': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `mode` option which is not a recognized mode', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'THROW',
		5,
		null,
		true,
		false,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			new Int16Vector({
				'mode': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `readonly` option which is not a boolean', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		null,
		void 0,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			new Int16Vector({
				'readonly': value
			});
		};
	}
});

tape( 'the function returns a one-dimensional ndarray', function test( t ) {
	var arr;

	arr = new Int16Vector();
	t.strictEqual( isndarrayLikeWithDataType( arr, 'int16' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );

	arr = new Int16Vector( {} );
	t.strictEqual( isndarrayLikeWithDataType( arr, 'int16' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );

	t.end();
});

tape( 'the function returns a one-dimensional ndarray (length)', function test( t ) {
	var arr;

	arr = new Int16Vector( 10 );
	t.strictEqual( isndarrayLikeWithDataType( arr, 'int16' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 10, 'returns expected value' );

	arr = new Int16Vector( 10, {} );
	t.strictEqual( isndarrayLikeWithDataType( arr, 'int16' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 10, 'returns expected value' );

	t.end();
});

tape( 'the function returns a one-dimensional ndarray (array)', function test( t ) {
	var arr;
	var out;

	arr = [ 1, 2, 3, 4 ];

	out = new Int16Vector( arr );
	t.strictEqual( isndarrayLikeWithDataType( out, 'int16' ), true, 'returns expected value' );
	t.strictEqual( out.length, 4, 'returns expected value' );
	t.strictEqual( isEqualInt16Array( getData( out ), new Int16Array( arr ) ), true, 'returns expected value' );

	out = new Int16Vector( arr, {} );
	t.strictEqual( isndarrayLikeWithDataType( out, 'int16' ), true, 'returns expected value' );
	t.strictEqual( out.length, 4, 'returns expected value' );
	t.strictEqual( isEqualInt16Array( getData( out ), new Int16Array( arr ) ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns a one-dimensional ndarray (typed array)', function test( t ) {
	var arr;
	var out;

	arr = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	out = new Int16Vector( arr );
	t.strictEqual( isndarrayLikeWithDataType( out, 'int16' ), true, 'returns expected value' );
	t.strictEqual( out.length, 4, 'returns expected value' );
	t.strictEqual( isEqualInt16Array( getData( out ), new Int16Array( arr ) ), true, 'returns expected value' );

	out = new Int16Vector( arr, {} );
	t.strictEqual( isndarrayLikeWithDataType( out, 'int16' ), true, 'returns expected value' );
	t.strictEqual( out.length, 4, 'returns expected value' );
	t.strictEqual( isEqualInt16Array( getData( out ), new Int16Array( arr ) ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns a one-dimensional ndarray (buffer)', function test( t ) {
	var arr;
	var out;
	var buf;

	arr = [ 1, 2, 3, 4 ];
	buf = array2buffer( arr );

	out = new Int16Vector( buf );
	t.strictEqual( isndarrayLikeWithDataType( out, 'int16' ), true, 'returns expected value' );
	t.strictEqual( out.length, 4, 'returns expected value' );
	t.strictEqual( isEqualInt16Array( getData( out ), new Int16Array( arr ) ), true, 'returns expected value' );

	out = new Int16Vector( buf, {} );
	t.strictEqual( isndarrayLikeWithDataType( out, 'int16' ), true, 'returns expected value' );
	t.strictEqual( out.length, 4, 'returns expected value' );
	t.strictEqual( isEqualInt16Array( getData( out ), new Int16Array( arr ) ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns a one-dimensional ndarray (arraybuffer)', function test( t ) {
	var buf;
	var out;

	buf = new ArrayBuffer( 8 );

	out = new Int16Vector( buf );
	t.strictEqual( isndarrayLikeWithDataType( out, 'int16' ), true, 'returns expected value' );
	t.strictEqual( out.length, 4, 'returns expected value' );
	t.strictEqual( isEqualInt16Array( getData( out ), new Int16Array( buf ) ), true, 'returns expected value' );

	out = new Int16Vector( buf, {} );
	t.strictEqual( isndarrayLikeWithDataType( out, 'int16' ), true, 'returns expected value' );
	t.strictEqual( out.length, 4, 'returns expected value' );
	t.strictEqual( isEqualInt16Array( getData( out ), new Int16Array( buf ) ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns a one-dimensional ndarray (arraybuffer, byteoffset)', function test( t ) {
	var buf;
	var out;

	buf = new ArrayBuffer( 32 );

	out = new Int16Vector( buf, 8 );
	t.strictEqual( isndarrayLikeWithDataType( out, 'int16' ), true, 'returns expected value' );
	t.strictEqual( out.length, 12, 'returns expected value' );
	t.strictEqual( isEqualInt16Array( getData( out ), new Int16Array( buf, 8 ) ), true, 'returns expected value' );

	out = new Int16Vector( buf, 8, {} );
	t.strictEqual( isndarrayLikeWithDataType( out, 'int16' ), true, 'returns expected value' );
	t.strictEqual( out.length, 12, 'returns expected value' );
	t.strictEqual( isEqualInt16Array( getData( out ), new Int16Array( buf, 8 ) ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns a one-dimensional ndarray (arraybuffer, byteoffset, length)', function test( t ) {
	var buf;
	var out;

	buf = new ArrayBuffer( 32 );

	out = new Int16Vector( buf, 8, 2 );
	t.strictEqual( isndarrayLikeWithDataType( out, 'int16' ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );
	t.strictEqual( isEqualInt16Array( getData( out ), new Int16Array( buf, 8, 2 ) ), true, 'returns expected value' );

	out = new Int16Vector( buf, 8, 2, {} );
	t.strictEqual( isndarrayLikeWithDataType( out, 'int16' ), true, 'returns expected value' );
	t.strictEqual( out.length, 2, 'returns expected value' );
	t.strictEqual( isEqualInt16Array( getData( out ), new Int16Array( buf, 8, 2 ) ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying the memory layout', function test( t ) {
	var arr;

	arr = new Int16Vector({
		'order': 'row-major'
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'int16' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );

	arr = new Int16Vector({
		'order': 'column-major'
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'int16' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying the memory layout (length)', function test( t ) {
	var arr;

	arr = new Int16Vector( 10, {
		'order': 'row-major'
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'int16' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 10, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );

	arr = new Int16Vector( 10, {
		'order': 'column-major'
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'int16' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 10, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying the memory layout (array)', function test( t ) {
	var arr;

	arr = new Int16Vector( [ 1, 2, 3, 4 ], {
		'order': 'row-major'
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'int16' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 4, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );

	arr = new Int16Vector( [ 1, 2, 3, 4 ], {
		'order': 'column-major'
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'int16' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 4, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying the memory layout (arraybuffer)', function test( t ) {
	var arr;

	arr = new Int16Vector( new ArrayBuffer( 32 ), {
		'order': 'row-major'
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'int16' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 16, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );

	arr = new Int16Vector( new ArrayBuffer( 32 ), {
		'order': 'column-major'
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'int16' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 16, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying the memory layout (arraybuffer, byteoffset)', function test( t ) {
	var arr;

	arr = new Int16Vector( new ArrayBuffer( 32 ), 8, {
		'order': 'row-major'
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'int16' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 12, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );

	arr = new Int16Vector( new ArrayBuffer( 32 ), 8, {
		'order': 'column-major'
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'int16' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 12, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying the memory layout (arraybuffer, byteoffset, length)', function test( t ) {
	var arr;

	arr = new Int16Vector( new ArrayBuffer( 32 ), 8, 2, {
		'order': 'row-major'
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'int16' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 2, 'returns expected value' );
	t.strictEqual( arr.order, 'row-major', 'returns expected value' );

	arr = new Int16Vector( new ArrayBuffer( 32 ), 8, 2, {
		'order': 'column-major'
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'int16' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 2, 'returns expected value' );
	t.strictEqual( arr.order, 'column-major', 'returns expected value' );

	t.end();
});

tape( 'the function supports returning read-only ndarrays', function test( t ) {
	var arr;

	arr = new Int16Vector({
		'readonly': true
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'int16' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.strictEqual( isReadOnly( arr ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports returning read-only ndarrays (length)', function test( t ) {
	var arr;

	arr = new Int16Vector( 10, {
		'readonly': true
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'int16' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 10, 'returns expected value' );
	t.strictEqual( isReadOnly( arr ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports returning read-only ndarrays (array)', function test( t ) {
	var arr;

	arr = new Int16Vector( [ 1, 2, 3, 4 ], {
		'readonly': true
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'int16' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 4, 'returns expected value' );
	t.strictEqual( isReadOnly( arr ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports returning read-only ndarrays (arraybuffer)', function test( t ) {
	var arr;

	arr = new Int16Vector( new ArrayBuffer( 32 ), {
		'readonly': true
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'int16' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 16, 'returns expected value' );
	t.strictEqual( isReadOnly( arr ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports returning read-only ndarrays (arraybuffer, byteoffset)', function test( t ) {
	var arr;

	arr = new Int16Vector( new ArrayBuffer( 32 ), 8, {
		'readonly': true
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'int16' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 12, 'returns expected value' );
	t.strictEqual( isReadOnly( arr ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports returning read-only ndarrays (arraybuffer, byteoffset, length)', function test( t ) {
	var arr;

	arr = new Int16Vector( new ArrayBuffer( 32 ), 8, 2, {
		'readonly': true
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'int16' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 2, 'returns expected value' );
	t.strictEqual( isReadOnly( arr ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports returning writable ndarrays', function test( t ) {
	var arr;

	arr = new Int16Vector({
		'readonly': false
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'int16' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 0, 'returns expected value' );
	t.strictEqual( isReadOnly( arr ), false, 'returns expected value' );

	t.end();
});

tape( 'the function supports returning writable ndarrays (length)', function test( t ) {
	var arr;

	arr = new Int16Vector( 10, {
		'readonly': false
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'int16' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 10, 'returns expected value' );
	t.strictEqual( isReadOnly( arr ), false, 'returns expected value' );

	t.end();
});

tape( 'the function supports returning writable ndarrays (array)', function test( t ) {
	var arr;

	arr = new Int16Vector( [ 1, 2, 3, 4 ], {
		'readonly': false
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'int16' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 4, 'returns expected value' );
	t.strictEqual( isReadOnly( arr ), false, 'returns expected value' );

	t.end();
});

tape( 'the function supports returning writable ndarrays (arraybuffer)', function test( t ) {
	var arr;

	arr = new Int16Vector( new ArrayBuffer( 32 ), {
		'readonly': false
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'int16' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 16, 'returns expected value' );
	t.strictEqual( isReadOnly( arr ), false, 'returns expected value' );

	t.end();
});

tape( 'the function supports returning writable ndarrays (arraybuffer, byteoffset)', function test( t ) {
	var arr;

	arr = new Int16Vector( new ArrayBuffer( 32 ), 8, {
		'readonly': false
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'int16' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 12, 'returns expected value' );
	t.strictEqual( isReadOnly( arr ), false, 'returns expected value' );

	t.end();
});

tape( 'the function supports returning writable ndarrays (arraybuffer, byteoffset, length)', function test( t ) {
	var arr;

	arr = new Int16Vector( new ArrayBuffer( 32 ), 8, 2, {
		'readonly': false
	});
	t.strictEqual( isndarrayLikeWithDataType( arr, 'int16' ), true, 'returns expected value' );
	t.strictEqual( arr.length, 2, 'returns expected value' );
	t.strictEqual( isReadOnly( arr ), false, 'returns expected value' );

	t.end();
});
