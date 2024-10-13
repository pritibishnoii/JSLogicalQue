# JavaScript Cloning Arrays & Objects

This repository covers various methods to clone arrays and objects in JavaScript, highlighting the difference between shallow and deep copies.

## Table of Contents
- [Cloning Arrays](#cloning-arrays)
  - [Using slice() Method (Shallow Copy)](#1-using-slice-method-shallow-copy)
  - [Using Spread Operator (...) (Shallow Copy)](#2-using-spread-operator-shallow-copy)
  - [Using Array.from() (Shallow Copy)](#3-using-arrayfrom-shallow-copy)
  - [Using concat() (Shallow Copy)](#4-using-concat-shallow-copy)
  - [Using map() (Shallow Copy)](#5-using-map-shallow-copy)
  - [Deep Copy with JSON.parse(JSON.stringify())](#6-deep-copy-with-jsonparsejsonstringify)
- [Object.assign()](#objectassign)
  - [Cloning an Object](#cloning-an-object)
  - [Merging Objects](#merging-objects)
  - [Overwriting Properties](#overwriting-properties)
  - [Adding New Properties](#adding-new-properties)
- [Shallow Copy vs. Deep Copy](#shallow-copy-vs-deep-copy)
- [Summary](#summary)

## Cloning Arrays

### 1. Using slice() Method (Shallow Copy)
The `slice()` method returns a shallow copy of an array.

```javascript
const original = [1, 2, 3];
const clone = original.slice();

console.log(clone);  // [1, 2, 3]
console.log(clone === original);  // false






JavaScript Cloning Arrays & Objects
This repository covers different methods to clone arrays and objects in JavaScript, highlighting the difference between shallow and deep copies.

Table of Contents
Cloning Arrays
slice()
Spread Operator (...)
Array.from()
concat()
map()
Deep Copy with JSON.parse(JSON.stringify())
Object.assign()
Cloning an Object
Merging Objects
Overwriting Properties
Adding New Properties
Shallow Copy vs. Deep Copy
Shields.io Badges
Cloning Arrays
1. Using slice() Method (Shallow Copy)
The slice() method returns a shallow copy of an array.

javascript
Copy code
const original = [1, 2, 3];
const clone = original.slice();

console.log(clone);  // [1, 2, 3]
console.log(clone === original);  // false
2. Using Spread Operator (...) (Shallow Copy)
The spread operator (...) expands an array into a new one.

javascript
Copy code
const original = [1, 2, 3];
const clone = [...original];

console.log(clone);  // [1, 2, 3]
console.log(clone === original);  // false
3. Using Array.from() (Shallow Copy)
Creates a new array instance from an existing array.

javascript
Copy code
const original = [1, 2, 3];
const clone = Array.from(original);

console.log(clone);  // [1, 2, 3]
console.log(clone === original);  // false
4. Using concat() (Shallow Copy)
Concatenating the array with an empty array also creates a shallow copy.

javascript
Copy code
const original = [1, 2, 3];
const clone = [].concat(original);

console.log(clone);  // [1, 2, 3]
console.log(clone === original);  // false
5. Using map() (Shallow Copy)
Using map() is useful when cloning and possibly modifying elements.

javascript
Copy code
const original = [1, 2, 3];
const clone = original.map(item => item);

console.log(clone);  // [1, 2, 3]
console.log(clone === original);  // false
6. Deep Copy with JSON.parse(JSON.stringify())
For nested arrays, deep copying is achieved with JSON.parse(JSON.stringify()).

javascript
Copy code
const original = [[1, 2], [3, 4]];
const deepClone = JSON.parse(JSON.stringify(original));

deepClone[0][0] = 10;
console.log(original[0][0]);  // 1 (original remains unchanged)
Object.assign()
Object.assign() is used to copy values from one or more source objects to a target object.

Syntax
javascript
Copy code
Object.assign(target, ...sources);
Use Cases
Cloning an Object

javascript
Copy code
const original = { a: 1, b: 2 };
const clone = Object.assign({}, original);
console.log(clone);  // { a: 1, b: 2 }
Merging Objects

javascript
Copy code
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { c: 3 };
const merged = Object.assign({}, obj1, obj2, obj3);
console.log(merged);  // { a: 1, b: 2, c: 3 }
Overwriting Properties

javascript
Copy code
const target = { a: 1, b: 2 };
const source = { b: 4, c: 3 };
Object.assign(target, source);
console.log(target);  // { a: 1, b: 4, c: 3 }
Adding New Properties

javascript
Copy code
const person = { name: "Alice" };
const additionalInfo = { age: 25, city: "New York" };
Object.assign(person, additionalInfo);
console.log(person);  // { name: "Alice", age: 25, city: "New York" }
Shallow Copy vs. Deep Copy
Object.assign() performs a shallow copy, meaning only references to nested objects are copied.

Example of Shallow Copy:

javascript
Copy code
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = Object.assign({}, obj1);
obj2.b.c = 3;
console.log(obj1.b.c);  // 3 (both objects share the same reference)
Example of Deep Copy:

javascript
Copy code
const obj1 = { a: 1, b: { c: 2 } };
const deepClone = JSON.parse(JSON.stringify(obj1));
deepClone.b.c = 3;
console.log(obj1.b.c);  // 2 (deep clone creates a new reference)

Summary
Object.assign() copies enumerable properties from source objects to a target object.
Shallow Copy: Nested objects are referenced, not duplicated.
Deep Copy: Use libraries like Lodash or JSON.parse(JSON.stringify()) for deep cloning.