# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @nasinsa/lotide`

**Require it:**

`const _ = require('@nasinsa/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `middle`: returns the middle-most element(s) of a given array
* `tail`: returns every element except the first element of an array
* `head`: returns the first element of an array
* `eqArrays`: checks if given two arrays are the same