<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Find

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Find elements in an array-like object that satisfy a test condition.

<section class="installation">

## Installation

```bash
npm install @stdlib/utils-find
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var find = require( '@stdlib/utils-find' );
```

#### find( arr, \[opts,] clbk )

Finds elements in an array-like object that satisfy a test condition. The function accepts two options: `k` and `returns`.

-   **k**: an `integer` which limits the number of elements returned and whose sign determines the direction in which to search. If set to a negative `integer`, the function searches from the last element to the first element.

-   **returns**: specifies the type of result to return and may be one of three options: `indices`, `values`, `*`.

    -   **indices**: indicates to return the element indices of those elements satisfying the search condition.
    -   **values**: indicates to return the element values of those elements satisfying the search condition.
    -   **\***: indicates to return both the element indices and values of those elements satisfying the search condition. The returned result is an `array` of `arrays`, where each sub-array is an index-value pair.

The `callback` is provided three arguments:

-   **element**: the current element
-   **index**: the current element's index
-   **array**: the input `array`, `typed array` or `string`

By default, `k` is the length of `arr` and `returns` is set to `indices`.

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var data = [ 30, 20, 50, 60, 10 ];

function greaterThan20( val ) {
    return val > 20;
}

var vals = find( data, greaterThan20 );
// returns [ 0, 2, 3 ]

data = 'Hello World';
function isUpperCase( val ) {
    return /[A-Z]/.test( val );
}

vals = find( data, isUpperCase );
// returns [ 0, 6 ]
```

To limit the number of results and specify that `values` should be returned,

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var data = [ 30, 20, 50, 60, 10 ];

var opts = {
    'k': 2,
    'returns': 'values'
};

function condition( val ) {
    return val > 20;
}

var vals = find( data, opts, condition );
// returns [ 30, 50 ]
```

If no `array` elements satisfy the test condition, the function returns an empty `array`.

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var data = [ 30, 20, 50, 60, 10 ];

var opts = {
    'k': 2,
    'returns': 'values'
};

function condition( val ) {
    return val > 1000;
}

var vals = find( data, opts, condition );
// returns []
```

To find the last two values satisfying a search condition,

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var data = [ 30, 20, 50, 60, 10 ];

var opts = {
    'k': -2,
    'returns': 'values'
};

function condition( val ) {
    return val > 20;
}

var vals = find( data, opts, condition );
// returns [ 60, 50 ]
```

To explicitly specify that only indices are returned,

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var data = [ 30, 20, 50, 60, 10 ];

var opts = {
    'k': -2,
    'returns': 'indices'
};

function condition( val ) {
    return val > 20;
}

var vals = find( data, opts, condition );
// returns [ 3, 2 ]
```

And to return both indices and values as index-value pairs,

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var data = [ 30, 20, 50, 60, 10 ];

var opts = {
    'k': -2,
    'returns': '*'
};

function condition( val ) {
    return val > 20;
}

var vals = find( data, opts, condition );
// returns [ [3, 60], [2, 50] ]
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable stdlib/no-redeclare -->

<!-- eslint no-undef: "error" -->

```javascript
var round = require( '@stdlib/math-base-special-round' );
var randu = require( '@stdlib/random-base-randu' );
var find = require( '@stdlib/utils-find' );

// Simulate the data...
var data = new Array( 100 );
var i;
for ( i = 0; i < data.length; i++ ) {
    data[ i ] = round( randu*100 );
}

// Find the first 10 values greater than 25...
var opts = {
    'k': 10,
    'returns': '*'
};

function condition( val ) {
    return val > 25;
}

var vals = find( data, opts, condition );
console.log( vals.join( '\n' ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-find.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-find

[test-image]: https://github.com/stdlib-js/utils-find/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-find/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-find/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-find?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-find.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-find/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-find/tree/deno
[umd-url]: https://github.com/stdlib-js/utils-find/tree/umd
[esm-url]: https://github.com/stdlib-js/utils-find/tree/esm
[branches-url]: https://github.com/stdlib-js/utils-find/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-find/main/LICENSE

</section>

<!-- /.links -->
