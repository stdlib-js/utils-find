/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var bench = require( '@stdlib/bench-harness' );
var isArray = require( '@stdlib/assert-is-array' );
var pow = require( '@stdlib/math-base-special-pow' );
var randu = require( '@stdlib/random-base-randu' );
var pkg = require( './../package.json' ).name;
var find = require( './../lib' ); // eslint-disable-line stdlib/no-redeclare


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {Function} fcn - function to benchmark
* @param {PositiveInteger} len - array length
* @returns {Function} benchmark function
*/
function createBenchmark( fcn, len ) {
	var x;
	var i;

	x = [];
	for ( i = 0; i < len; i++ ) {
		x.push( i );
	}
	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var out;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			x[ len-2 ] = randu();
			out = find( x, condition );
			if ( typeof out !== 'object' ) {
				b.fail( 'should return an array' );
			}
		}
		b.toc();
		if ( !isArray( out ) ) {
			b.fail( 'should return an array' );
		}
		b.pass( 'benchmark finished' );
		b.end();

		function condition( elem, idx ) {
			return idx % 10;
		}
	}
}


// MAIN //

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var len;
	var min;
	var max;
	var f;
	var i;

	min = 1; // 10^min
	max = 6; // 10^max

	for ( i = min; i <= max; i++ ) {
		len = pow( 10, i );

		f = createBenchmark( find, len );
		bench( pkg+':len='+len, f );
	}
}

main();
