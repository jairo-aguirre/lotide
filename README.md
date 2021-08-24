# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @vandernpm/lotide`

**Require it:**

`const _ = require('@vandernpm/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: Returns the head of the given array
* `tail(...)`: Returns the tail of the given array
* `middle(...)`: Returns the middle element of a given array
* `assertArraysEqual(...)`: Compares two arrays
* `assertEqual(...)`: Returns comparison assertion of two elements
* `assertObjectsEqual(...)`: Returns comparison assertion of two objects
* `countLetters(...)`: Returs the amount of letter in a sentence
* `countOnly(...)`: Returns the frequency of an element in an array
* `eqArrays(...)`: Returns comparison assertion of two arrays
* `findKey(...)`: Returns the key in an object
* `findKeyByValue(...)`: Returns the value in an object based on a given key
* `letterPositions(...)`: Returns the position (index) of a letter in a sentence
* `map(...)`: Implements a map function
* `takeUntil(...)`: Returns an array based on an original array trigger value
* `without(...)`: Returns an array without a given element