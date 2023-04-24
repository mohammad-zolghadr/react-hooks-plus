# Package is Developing ...

# React Hooks Plus

In this package, we have developed complete hooks and functional functions for you to do your projects more easily, quickly and accurately.
Currently, the following sections have been developed and you can use them

<h3 id="toc">Table of Content </h3>

<li><a href="#installation">Installation And Conditions</a></li>
<details>
<summary>useRandom</summary>
<ul>
<li><a href="#random-number">A random number</a></li>
<li><a href="#random-number-digits">A random number with an arbitrary number of digits</a></li>
<li><a href="#random-number-range">A random number with an arbitrary range</a></li>
<li><a href="#random-number-even-range">An even or odd random number with an arbitrary range</a></li>
<li><a href="#random-string">A random string containing letters</a></li>
<li><a href="#random-string-length">A random string containing letters with the ability to specify the length</a></li>
<li><a href="#random-string-symbols">A random string containing numbers, letters and symbols</a></li>
<li><a href="#random-string-symbols-length">A random string containing numbers, letters and symbols</a></li>
</ul>
</details>

---

## <h2 id="installation">Installation And Conditions <a href="#toc">&uarr;</a></h2>

You can use :

`npm i react-hooks-plus`

or

`yarn add react-hooks-plus`

---

## <h2 id="use-random">UseRandom <a href="#toc">&uarr;</a></h2>

---

### <h3 id="random-number">A Random Number <a href="#toc">&uarr;</a></h3>

First you need to import

```javascript
import { useRandomNumber } from 'react-hooks-plus';
```

And then to use it, proceed as follows :

```javascript
console.log(useRandomNumber());
```

By doing this, a `random number (max 4 digits)` will appear for you in the log

---

### <h3 id="random-number-digits">A random number with an arbitrary number of digits <a href="#toc">&uarr;</a></h3>

First you need to import

```javascript
import { useRandomNumberDigit } from 'react-hooks-plus';
```

And then to use it, proceed as follows :

> As the input parameter of the function, you must enter a number so that your final output is a number with the desired number of digits

```javascript
console.log(useRandomNumberDigit(7));
```

In this example, your log output will be a `7-digit random number`

---

### <h3 id="random-number-range">A random number with an arbitrary range <a href="#toc">&uarr;</a></h3>

First you need to import

```javascript
import { useRandomNumberRange } from 'react-hooks-plus';
```

And then to use it, proceed as follows :

> As the input parameter of the function, you must enter two numbers as `min` and `max` so that your final output is a number in your desired range.

```javascript
console.log(useRandomNumberRange(1, 100));
```

In this example, your log output will be a `random number between 1 and 100`

---

### <h3 id="random-number-even-range">An even or odd random number with an arbitrary range <a href="#toc">&uarr;</a></h3>

First you need to import

```javascript
import { useRandomNumberEven } from 'react-hooks-plus';
```

And then to use it, proceed as follows :

> As the input parameter of the function, you must enter a boolean value and two numbers as min and max. If the first parameter is true, it means your output is an `even number` and if it is false, it means your output is an `odd number`.
> The second and third parameters are related to your `determining the random number range`

```javascript
console.log(useRandomNumberEven(true, 1, 100));
```

In this example, your log output will be an `even random number between 1 and 100`

---

### <h3 id="random-string">A random string containing letters <a href="#toc">&uarr;</a></h3>

First you need to import

```javascript
import { useRandomString } from 'react-hooks-plus';
```

And then to use it, proceed as follows :

```javascript
console.log(useRandomString());
```

By doing this, a `random string (max 5 char)` will appear for you in the log

---

### <h3 id="random-string-length">A random string containing letters with the ability to specify the length <a href="#toc">&uarr;</a></h3>

First you need to import

```javascript
import { useRandomStringLength } from 'react-hooks-plus';
```

And then to use it, proceed as follows :

> As an input parameter to the function, you must assign a number to it, which determines the `length of your string`

```javascript
console.log(useRandomStringLength(12));
```

By doing this, your log output will be a `random string of 12 characters long`

---

### <h3 id="random-string-symbols">A random string containing numbers, letters and symbols <a href="#toc">&uarr;</a></h3>

First you need to import

```javascript
import { useRandomStringSymbols } from 'react-hooks-plus';
```

And then to use it, proceed as follows :

```javascript
console.log(useRandomStringSymbols());
```

By doing this, a `random string of letters, numbers and symbols (max 5 characters)` will appear for you in the log.

---

### <h3 id="random-string-symbols-length">A random string containing numbers, letters and symbols with the ability to specify the length <a href="#toc">&uarr;</a></h3>

First you need to import

```javascript
import { useRandomStringSymbolsLength } from 'react-hooks-plus';
```

And then to use it, proceed as follows :

> As an input parameter to the function, you must assign a number to it, which determines the `length of your string`

```javascript
console.log(useRandomStringSymbolsLength(12));
```

By doing this, your log output will be a `random string of letters, numbers, and symbols that is 12 characters long`

---
