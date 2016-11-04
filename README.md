# construction

:construction: Interface with binary structures in Javascript, built for network protocols.

[![Build Status](https://travis-ci.org/montyanderson/construction.svg?branch=master)](https://travis-ci.org/montyanderson/construction) [![npm version](https://badge.fury.io/js/construction.svg)](https://badge.fury.io/js/construction)

## Features

* Small, concise codebase with no dependencies.
* Full test suite, testing *every type*.
* Supports, Int8, Int16, Int32, UInt8, UInt16, UInt32.

## To Do

* Add char and array types.

``` C
struct User {
	uint8_t age;
	int32_t favouriteNumber;
}
```

``` javascript
const Construction = requrie("construction");
const t = Construction.types;

const User = new Construction("LE", {
	age: t.UInt8;
	favouriteNumber: t.Int32
});
```

## API

### new Construction(endianness, object)

Create a new construction object.

``` javascript
// Endianness can be "LE" or "BE"

const User = new Construction("LE", {
	age: t.UInt8,
	favouriteNumber: t.Int32
});
```

### buffer Construction#write(object)

Convert a javascript object to a binary buffer.

``` javascript
const buffer = User.write({
	age: 15,
	favouriteNumber: 1000000
});

console.log(buffer);
// <Buffer 0f 40 42 0f 00>
```

### object Construction#read(buffer)

Convert a binary buffer to a javascript object.

``` javascript
const user = User.read(Buffer.from("0f40420f00", "hex"));

console.log(user);
// { age: 15, favouriteNumber: 1000000 }
```
