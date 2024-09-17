# Lecture 5: JavaScript Basics

What is JS?

* dynamic, untyped, interpreted language
* prototype-based
* object-oriented
* has an API

variable scoping

```js
var globalVar;
function foo() {
    var localVar;
    if (globalVar > 0) {
        var localVar2 = 2;
    }
    // localVar2 is valid here
}
```

var scoping confusions

```js
console.log('Val is:', val); //Syntax error
//...
for(var i = 0; i < 10; i++) {
    var val = "different string"; // Hoisted to func start, but works
}
```

`number` type

* $\text{MAX_INT}=(2^{53}-1)=9007199254740991$
* $1/0=\text{Infinity}$
* $\text{Math.sqrt(-1)}=\text{NaN}$

!!! warning "special cases"
    `(0.1 + 0.2) == 0.3` is `false`

    Bitwise operators (e.g. `~, &, |, ^, >>, <<, >>>`) are 32bit.

properties

```js
let foo = {};
let bar = {name: "Alice", age: 23, state: "California"};
let x = { "": "empty", "---": "dashes"};
```

```js
//add
let foo = {};
foo.name = "Fred";

//remove
let foo = {name: "Fred"};
delete foo.name;

//enumerate
Object.keys({name: "Alice", age: 23}) = ["name", "age"]
```

array

```js
let anArr = [1,2,3];
anArr[5]='FooBar'; //[1,2,3,,,'FooBar']
```

dates

```js
let date = new Date();
//date.valueOf() = 1452359316314
//date.toISOString() = '2016-01-09T17:08:36.314Z'
//date.toLocaleString() = '1/9/2016, 9:08:36 AM'
```

exceptions - try/catch

```js
try {
    nonExistentFunction();
} catch (err) { // typeof err 'object'
    console.log("Error call func", err.name, err.message);
}
```

exceptions - throw/finally

```js
try {
    throw "Help!";
} catch (errstr) { // errstr === "Help!"
    console.log('Got exception', errstr);
} finally {
    // This block is executed after try/catch
}
```

js in web page

```html
<!-- file -->
<script type="text/javascript" src="code.js"></script>

<!-- inline -->
<script type="text/javascript">
//<![CDATA[
    //Javascript goes here...
//]]>
</script>
```