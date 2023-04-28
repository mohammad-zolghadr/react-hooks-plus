<img src="https://user-images.githubusercontent.com/48680310/235084939-30b03cc9-2c7b-45c7-b220-955e27e4c4b5.png" />

<a href="https://github.com/mohammad-zolghadr/react-hooks-plus" target="_blank"> <img src="https://user-images.githubusercontent.com/48680310/235084610-9e92ccf9-1cb6-4c20-8107-dcd6a22b2a77.png" /> </a>

<a href="https://github.com/mohammad-zolghadr/react-hooks-plus"><img src="https://img.shields.io/badge/-on github-323232?style=flat&logo=github&logoColor=white"/></a>
<span> </span>
<a href="https://npmjs.org/package/react-hooks-plus"><img src="https://img.shields.io/badge/-on npm-bb2222?style=flat&logo=npm"/></a>
<span> </span>
<span>[![install size](https://packagephobia.com/badge?p=react-hooks-plus)](https://packagephobia.com/result?p=react-hooks-plus)
</span>
<span> </span>
<span>[![NPM Downloads](https://img.shields.io/npm/dm/react-hooks-plus.svg?style=flat)](https://npmcharts.com/compare/react-hooks-plus?minimal=true)
</span>

Increasing **speed** and **accuracy** is one of the main criteria for cleaner and better coding

<a href="#contact-me">📞 Who I am and how to communicate with me</a>

<h3 id="toc">Table of Content </h3>

<li><a href="#installation">Installation And Conditions</a></li>
<details><summary>Functions</summary>
<ul>
<li><details>
<summary>Random Functions</summary>
<ul>
<li><a href="#random-number">randomNumber</a></li>
<li><a href="#random-number-digits">randomNumberDigit</a></li>
<li><a href="#random-number-range">randomNumberRange</a></li>
<li><a href="#random-number-even-range">randomNumberEven</a></li>
<li><a href="#random-string">randomString</a></li>
<li><a href="#random-string-length">randomStringLength</a></li>
<li><a href="#random-string-symbols">randomStringSymbols</a></li>
<li><a href="#random-string-symbols-length">randomStringSymbolsLength</a></li>
</ul>
</details></li>
<li>
<details><summary>Array Functions</summary>
<ul>
<li><a href="#unique-array">uniqueArray</a></li>
<li><a href="#shuffle-array">shuffleArray</a></li>
<li><a href="#chunk">chunk</a></li>
<li><a href="#flatten-array">flattenArray</a></li>
<li><a href="#find-max-index">findMaxIndex</a></li>
<li><a href="#is-array-empty">isArrayEmpty</a></li>
<li><a href="#get-max-element">getMaxElement</a></li>
<li><a href="#get-min-element">getMinElement</a></li>
<li><a href="#has-element">hasElement</a></li>
<li><a href="#sum">sum</a></li>
<li><a href="#average">average</a></li>
<li><a href="#add-element-to-array-if-not-exist">addElementToArrayIfNotExist</a></li>
<li><a href="#add-object-to-array-if-prop-not-exist">addObjectToArrayIfPropNotExist</a></li>
<li><a href="#remove-element">removeElement</a></li>
<li><a href="#remove-duplicates-by-property">removeDuplicatesByProperty</a></li>
<li><a href="#sort-by-property">sortByProperty</a></li>
<li><a href="#sort-array-desc">sortArrayDesc</a></li>
<li><a href="#sort-array-asc">sortArrayAsc</a></li>
</ul>
</details>
</li>
<li><a href="#func-local-storage">Local Storage</a></li>
<li><a href="#func-decimal-precision">Decimal With Precision</a></li>
</ul>
</details>
<details><summary>Hooks</summary>
<ul>
<li><a href="#use-copy-to-clipboard">useCopyToClipboard</a></li>
<li><a href="#use-local-storage">useLocalStorage</a></li>
<li><a href="#use-document-title">useDocTitle</a></li>
<li><a href="#use-on-click-outside">useOnClickOutside</a></li>
<li><a href="#use-hover">useHover</a></li>
<li><a href="#use-fetch">useFetch</a></li>
<li><a href="#use-media">useMedia</a></li>
<li><a href="#use-scroll">useScroll</a></li>
<li><a href="#use-screen">useScreen</a></li>
<li><a href="#use-on-screen">useOnScreen</a></li>
<li>
<details><summary>Use Console</summary>
<ul>
<li><a href="#use-con-log">useConLog</a></li>
<li><a href="#use-con-group">useConGroup</a></li>
<li><a href="#use-con-table">useConTable</a></li>
<li><a href="#use-con-time">useConTime</a></li>
</ul>
</details>
</li>
</details>
</ul>
</details>

---

## <h2 id="installation">Installation And Conditions <a href="#toc">&uarr;</a></h2>

You can use :

`npm i react-hooks-plus`

or

`yarn add react-hooks-plus`

---

## <h2 id="random-functions">Random Functions <a href="#toc">&uarr;</a></h2>

### <h3 id="random-number">randomNumber <a href="#toc">&uarr;</a></h3>

First you need to import

```javascript
import { randomNumber } from 'react-hooks-plus';
```

And then to use it, proceed as follows :

```javascript
console.log(randomNumber());
```

By doing this, a `random number (max 4 digits)` will appear for you in the log

---

### <h3 id="random-number-digits">randomNumberDigit <a href="#toc">&uarr;</a></h3>

First you need to import

```javascript
import { randomNumberDigit } from 'react-hooks-plus';
```

And then to use it, proceed as follows :

> As the function parameter of the function, you must enter a number so that your final output is a number with the desired number of digits

```javascript
console.log(randomNumberDigit(7));
```

In this example, your log output will be a `7-digit random number`

---

### <h3 id="random-number-range">randomNumberRange <a href="#toc">&uarr;</a></h3>

First you need to import

```javascript
import { randomNumberRange } from 'react-hooks-plus';
```

And then to use it, proceed as follows :

> As the function parameter of the function, you must enter two numbers as `min` and `max` so that your final output is a number in your desired range.

```javascript
console.log(randomNumberRange(1, 100));
```

In this example, your log output will be a `random number between 1 and 100`

---

### <h3 id="random-number-even-range">randomNumberEven <a href="#toc">&uarr;</a></h3>

First you need to import

```javascript
import { randomNumberEven } from 'react-hooks-plus';
```

And then to use it, proceed as follows :

> As the function parameter of the function, you must enter a boolean value and two numbers as min and max. If the first parameter is true, it means your output is an `even number` and if it is false, it means your output is an `odd number`.
> The second and third parameters are related to your `determining the random number range`

```javascript
console.log(randomNumberEven(true, 1, 100));
```

In this example, your log output will be an `even random number between 1 and 100`

---

### <h3 id="random-string">randomString <a href="#toc">&uarr;</a></h3>

First you need to import

```javascript
import { randomString } from 'react-hooks-plus';
```

And then to use it, proceed as follows :

```javascript
console.log(randomString());
```

By doing this, a `random string (max 5 char)` will appear for you in the log

---

### <h3 id="random-string-length">randomStringLength <a href="#toc">&uarr;</a></h3>

First you need to import

```javascript
import { randomStringLength } from 'react-hooks-plus';
```

And then to use it, proceed as follows :

> As an function parameter to the function, you must assign a number to it, which determines the `length of your string`

```javascript
console.log(randomStringLength(12));
```

By doing this, your log output will be a `random string of 12 characters long`

---

### <h3 id="random-string-symbols">randomStringSymbols <a href="#toc">&uarr;</a></h3>

First you need to import

```javascript
import { randomStringSymbols } from 'react-hooks-plus';
```

And then to use it, proceed as follows :

```javascript
console.log(randomStringSymbols());
```

By doing this, a `random string of letters, numbers and symbols (max 5 characters)` will appear for you in the log.

---

### <h3 id="random-string-symbols-length">randomStringSymbolsLength <a href="#toc">&uarr;</a></h3>

First you need to import

```javascript
import { randomStringSymbolsLength } from 'react-hooks-plus';
```

And then to use it, proceed as follows :

> As an function parameter to the function, you must assign a number to it, which determines the `length of your string`

```javascript
console.log(randomStringSymbolsLength(12));
```

By doing this, your log output will be a `random string of letters, numbers, and symbols that is 12 characters long`

---

## <h2 id="array-functions">Array Functions <a href="#toc">&uarr;</a></h2>

### <h3 id="unique-array">UniqueArray <a href="#toc">&uarr;</a></h3>

`UniqueArray` : Takes an array and returns a new array containing only unique elements.

First you need to import

```javascript
import { uniqueArray } from 'react-hooks-plus';
```

And then to use it, proceed as follows :

```javascript
const arr = [1, 2, 2, 3, 4, 4];
const uniqueArr = uniqueArray(arr); // [1, 2, 3, 4]
```

---

### <h3 id="shuffle-array">shuffleArray <a href="#toc">&uarr;</a></h3>

`shuffleArray` : This function takes in an array and shuffles its contents randomly

First you need to import

```javascript
import { shuffleArray } from 'react-hooks-plus';
```

And then to use it, proceed as follows :

```javascript
const myArray = [1, 2, 3, 4, 5, 6];
const shuffledArray = shuffleArray(myArray);
```

---

### <h3 id="chunk">chunk <a href="#toc">&uarr;</a></h3>

`chunk` : This function takes an array and a chunk size and returns a new array with the original array split into chunks of the specified size

First you need to import

```javascript
import { chunk } from 'react-hooks-plus';
```

And then to use it, proceed as follows :

```javascript
const arr = [1, 2, 3, 4, 5, 6];
const chunkedArr = chunk(arr, 3); // returns [[1, 2, 3], [4, 5, 6]]
```

---

### <h3 id="flatten-array">flattenArray <a href="#toc">&uarr;</a></h3>

`flattenArray` : Takes an array of arrays and flattens it into a single array

First you need to import

```javascript
import { flattenArray } from 'react-hooks-plus';
```

And then to use it, proceed as follows :

```javascript
const arr = [[1, 2], [3, 4], [5]];
const flattenedArr = flattenArray(arr); // [1, 2, 3, 4, 5]
```

---

### <h3 id="find-max-index">findMaxIndex <a href="#toc">&uarr;</a></h3>

The `findMaxIndex` function takes an array of numbers as input and returns the index of the largest element in the array.

First you need to import

```javascript
import { findMaxIndex } from 'react-hooks-plus';
```

And then to use it, proceed as follows :

```javascript
const arr1 = [3, 7, 1, 9, 4];
const maxIndex = findMaxIndex(arr1);
console.log(
  `The largest element in arr1 is ${arr1[maxIndex]} at index ${maxIndex}.`
);
```

---

### <h3 id="is-array-empty">isArrayEmpty <a href="#toc">&uarr;</a></h3>

`isArrayEmpty` : Function to check if an array is empty

First you need to import

```javascript
import { isArrayEmpty } from 'react-hooks-plus';
```

And then to use it, proceed as follows :

```javascript
const myArr = [4, 6, 8, 5];
console.log(isArrayEmpty(myArr)); // false
```

---

### <h3 id="get-max-element">getMaxElement <a href="#toc">&uarr;</a></h3>

`getMaxElement` : Function to get the maximum element in an array

First you need to import

```javascript
import { getMaxElement } from 'react-hooks-plus';
```

And then to use it, proceed as follows :

```javascript
const arr: number[] = [10, 5, 20, 15];
console.log(getMaxElement(arr)); // Output: 20
```

---

### <h3 id="get-min-element">getMinElement <a href="#toc">&uarr;</a></h3>

`getMinElement` : Function to get the minimum element in an array

First you need to import

```javascript
import { getMinElement } from 'react-hooks-plus';
```

And then to use it, proceed as follows :

```javascript
const arr: number[] = [10, 5, 20, 15];
console.log(getMinElement(arr)); // Output: 5
```

---

### <h3 id="has-element">hasElement <a href="#toc">&uarr;</a></h3>

`hasElement` : Function to check if an array contains a specific element or not
First you need to import

```javascript
import { hasElement } from 'react-hooks-plus';
```

And then to use it, proceed as follows :

```javascript
const fruits: string[] = ['apple', 'banana', 'orange'];
console.log(hasElement(fruits, 'banana')); // Output: true
```

---

### <h3 id="sum">sum <a href="#toc">&uarr;</a></h3>

`sum` : This function returns the sum of all the elements in the input array.

First you need to import

```javascript
import { sum } from 'react-hooks-plus';
```

And then to use it, proceed as follows :

```javascript
const total = sum(numbers);
console.log(`The sum is ${total}`); //output: 15
```

---

### <h3 id="average">average <a href="#toc">&uarr;</a></h3>

`average` : Returns the average value of the elements of the array

First you need to import

```javascript
import { average } from 'react-hooks-plus';
```

And then to use it, proceed as follows :

```javascript
const arr = [2, 4, 6, 8, 10];
const avg = average(arr); // returns 6
```

---

### <h3 id="add-element-to-array-if-not-exist">addElementToArrayIfNotExist <a href="#toc">&uarr;</a></h3>

`addElementToArrayIfNotExist` : Function to add an element to an array if it doesn't exist in the array.

First you need to import

```javascript
import { addElementToArrayIfNotExist } from 'react-hooks-plus';
```

And then to use it, proceed as follows :

```javascript
let newArr = addElementToArrayIfNotExist(oldArr, elementToAdd);
```

---

### <h3 id="add-object-to-array-if-prop-not-exist">addObjectToArrayIfPropNotExist <a href="#toc">&uarr;</a></h3>

`addObjectToArrayIfPropNotExist` : Function to add an object to an array if a specific property of that object doesn't exist in the array.

First you need to import

```javascript
import { addObjectToArrayIfPropNotExist } from 'react-hooks-plus';
```

And then to use it, proceed as follows :

```javascript
let newArr = addObjectToArrayIfPropNotExist(oldArr, objToAdd, 'propertyName');
```

---

### <h3 id="remove-element">removeElement <a href="#toc">&uarr;</a></h3>

`removeElement` : Function to remove a specific element from an array

First you need to import

```javascript
import { removeElement } from 'react-hooks-plus';
```

And then to use it, proceed as follows :

```javascript
let numbers: number[] = [10, 20, 30, 40];
numbers = removeElement(numbers, 20);
console.log(numbers); // Output: [10, 30, 40]
```

---

### <h3 id="remove-duplicates-by-property">removeDuplicatesByProperty <a href="#toc">&uarr;</a></h3>

First you need to import

`removeDuplicatesByProperty` : This function takes an array of objects and in the second parameter of the function, it takes a key and checks **if there were objects in this array that had the same key, it removes all duplicate items**.

```javascript
import { removeDuplicatesByProperty } from 'react-hooks-plus';
```

And then to use it, proceed as follows :

```javascript
const people = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Jane', age: 25 },
  { id: 3, name: 'John', age: 30 },
  { id: 4, name: 'Bob', age: 40 },
  { id: 5, name: 'Jane', age: 20 },
];

const uniquePeople = removeDuplicatesByProperty(people, 'name');
console.log(uniquePeople);
/* Output:
[
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Jane", age: 25 },
  { id: 4, name: "Bob", age:40 }
];
*/
```

---

### <h3 id="sort-by-property">sortByProperty <a href="#toc">&uarr;</a></h3>

`sortByProperty`: Takes an array of objects and a property name and returns a new array sorted by the values of that property.

First you need to import

```javascript
import { sortByProperty } from 'react-hooks-plus';
```

And then to use it, proceed as follows :

```javascript
const users = [
  { name: 'John', age: 25 },
  { name: 'Mary', age: 20 },
  { name: 'Adam', age: 30 },
];

const sortedUsers = sortByProperty(users, 'age'); // [{ name: 'Mary', age: 20 }, { name: 'John', age: 25 }, { name: 'Adam', age: 30 }]
```

---

### <h3 id="sort-array-desc">sortArrayDesc <a href="#toc">&uarr;</a></h3>

`sortArrayDesc` : Function to sort an array in descending order.

First you need to import

```javascript
import { sortArrayDesc } from 'react-hooks-plus';
```

And then to use it, proceed as follows :

```javascript
let newArr = sortArrayDesc(oldArr);
```

---

### <h3 id="sort-array-asc">sortArrayAsc <a href="#toc">&uarr;</a></h3>

`sortArrayAsc` : Function to sort an array in ascending order.

First you need to import

```javascript
import { sortArrayAsc } from 'react-hooks-plus';
```

And then to use it, proceed as follows :

```javascript
let newArr = sortArrayAsc(oldArr);
```

---

## <h2 id="func-local-storage">Local Storage <a href="#toc">&uarr;</a></h3>

First you need to import

```javascript
import { saveToLocalStorage, getFromLocalStorage } from 'react-hooks-plus';
```

And then to use it, proceed as follows :

> In the `saveToLocalStorage` function, you must enter the `key` as the first function parameter, and in the second parameter, you must enter the `value` that you want to save in the browser storage.

> In the `getFromLocalStorage` tab, you must enter the `key` value as an function parameter to return the value stored by this key from the browser's storage.

```javascript
// save to local
const myFunction = () => {
  saveToLocalStorage('MY-KEY', 'MY-VALUE');
};

// get from local
console.log(getFromLocalStorage('MY-KEY'));
```

By doing this, you save the `MY-VALUE` value in the browser's memory with the `MY-KEY` key

And in the log, you will receive the information stored with the `MY-KEY` key from the browser's storage

---

## <h2 id="func-decimal-precision">Decimal With Precision <a href="#toc">&uarr;</a></h3>

First you need to import

```javascript
import { setPrecisionForDecimal } from 'react-hooks-plus';
```

And then to use it, proceed as follows :

> You can limit the number of digits of a decimal number by using the `setPrecisionForDecimal` function

> 1.  The first parameter is `your number`, which can be a decimal number or an integer
> 2.  The second parameter is the `number of decimal digits`.

```javascript
setPrecisionForDecimal(3.14159, 2); // Output: 3.14
setPrecisionForDecimal(3, 2); // Output: 3
setPrecisionForDecimal(3.14159, 0); // Output: 3
setPrecisionForDecimal(3.1485, 2); // Output: 3.15
```

---

## <h2 id="use-copy-to-clipboard">useCopyToClipboard <a href="#toc">&uarr;</a></h2>

First you need to import

```javascript
import { useCopyToClipboard } from 'react-hooks-plus';
```

Then, you can use this hook in your component like this:

> `copyToClipboard` is a function that you must enter a value that you want to save to the clipboard as the input of this function.

> `copied` is a boolean value that returns true `when the content is saved to the clipboard` and **returns false after 1.5 seconds**.
> `copied` is used when you want to put a successful text in the relevant subfield to show the user that the content in question has been successfully saved to the clipboard.

Example :

```javascript
function MyComponent() {
  const { copied, copyToClipboard } = useCopyToClipboard();

  return (
    <div>
      <button onClick={() => copyToClipboard('Some text to copy to clipboard')}>
        Copy to clipboard
      </button>
      {copied && <p>Text copied to clipboard!</p>}
    </div>
  );
}
export default MyComponent;
```

---

## <h2 id="use-local-storage">useLocalStorage <a href="#toc">&uarr;</a></h2>

First you need to import

```javascript
import { useLocalStorage } from 'react-hooks-plus';
```

Then, you can use this hook in your component like this:

> The first parameter of the useLocalStorage hook is the `key` that your value can be obtained in the browser storage with this key, and the second parameter is your `value`.

> You should store the return value from the useLocalStorage hook **as a useState**. That is, a value and a setValue
> And you can use this value, which is a react state, wherever you want
> Also, using the setValue function, you can change the value wherever you want, and this value **change will also be done in the local storage**.

Example :

```javascript
function PhoneNumberInput() {
  const [phoneNumber, setPhoneNumber] = useLocalStorage('phoneNumber', '');

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <input type='tel' value={phoneNumber} onChange={handlePhoneNumberChange} />
  );
}
```

---

## <h2 id="use-document-title">useDocTitle <a href="#toc">&uarr;</a></h2>

First you need to import

```javascript
import { useDocTitle } from 'react-hooks-plus';
```

Then, you can use this hook in your component like this:

> It takes a **string** as input parameter

```javascript
const MyComponent = () => {
  useDocTitle('My Component Title');

  return (
    <div>
      <h1>My Component</h1>
    </div>
  );
};
```

---

## <h2 id="use-on-click-outside">useOnClickOutside <a href="#toc">&uarr;</a></h2>

First you need to import

```javascript
import { useOnClickOutside } from 'react-hooks-plus';
```

Then, you can use this hook in your component like this:

> This hook takes a `ref` as the first parameter and a `function` as the second parameter
> So you have to assign this ref to an element on the page and create a function. This way, the function will be called **every time outside of your element is clicked**

Example :

```javascript
import { useRef } from 'react';
import useOnClickOutside from 'react-hooks-plus';

function App() {
  const ref = useRef(null);

  const handleClickOutside = () => {
    console.log('Clicked outside!');
  };

  useOnClickOutside(ref, handleClickOutside);

  return (
    <div ref={ref}>
      <p>Click outside this element and check the console!</p>
    </div>
  );
}
```

---

## <h2 id="use-hover">useHover <a href="#toc">&uarr;</a></h2>

First you need to import

```javascript
import { useHover } from 'react-hooks-plus';
```

Then, you can use this hook in your component like this:

> To use this hook, you should note that it has two return values
> The first value is a `ref`, which you must assign to the target element
> And the second return value is a `boolean` whose **value becomes true whenever hover is performed on your element for which you have defined ref**.

Example :

```javascript
import useHover from 'react-hooks-plus';

function MyComponent() {
  const [ref, isHovered] = useHover();

  return (
    <div ref={ref}>
      <p>{isHovered ? 'Hovered!' : 'Not Hovered'}</p>
    </div>
  );
}
```

---

## <h2 id="use-fetch">useFetch <a href="#toc">&uarr;</a></h2>

First you need to import

```javascript
import { useFetch } from 'react-hooks-plus';
```

Then, you can use this hook in your component like this:

> The useFetch hook takes the `url` of an API as an input parameter and gives you three return values

> 1.  One of the return values ​​is `isLoading`, which is a Boolean value and from the time the request is sent, until the response is received from the API side, its value is **true**, and when the response is received (whether it encounters an error or data) are received safely, its value will be **false**
> 2.  Another return value is `error`, which returns an error if there is an error
> 3.  And another return value is `data`, which contains the fetched data from the API (the response from the API)

Example :

```javascript
import { useFetch } from 'react-hooks-plus';

function MyComponent() {
  const { data, isLoading, error } = useFetch('/api/data');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>{data?.title}</h1>
      <div>{data?.body}</div>
    </div>
  );
}
```

---

## <h2 id="use-media">useMedia <a href="#toc">&uarr;</a></h2>

First you need to import

```javascript
import { useMedia } from 'react-hooks-plus';
```

Then, you can use this hook in your component like this:

> useMedia(queries: string[], values: T[], defaultValue: T)
>
> 1. `Queries` must be an `array of CSS media queries` (e.g. ['(max-width: 768px)', '(orientation: landscape)']).
> 2. `Values` must be an `array of any type`, corresponding to the queries (e.g. [true, 'large']).
> 3. `DefaultValue` is the value returned when none of the media queries match (e.g. false).

> The hook returns the **current value, based on the current screen size**.

Example :

```javascript
import React from 'react';
import useMedia from 'react-hooks-plus';

function App() {
  const isMobile = useMedia(['(max-width: 767px)'], [true], false);

  return (
    <div>
      <h1>You are browsing on {isMobile ? 'mobile' : 'desktop'}</h1>
    </div>
  );
}
```

---

## <h2 id="use-scroll">useScroll <a href="#toc">&uarr;</a></h2>

First you need to import

```javascript
import { useScroll } from 'react-hooks-plus';
```

Then, you can use this hook in your component like this:

> The `useScroll` hook `returns two states x and y`

> Both states, as their name suggests, **indicate the amount that has been scrolled from the page**

Example :

```javascript
import useScroll from 'react-hooks-plus';

const MyComponent = () => {
  const { x, y } = useScroll();

  return (
    <div>
      <p>Current scroll position:</p>
      <p>X: {x}</p>
      <p>Y: {y}</p>
    </div>
  );
};
```

---

## <h2 id="use-screen">useScreen <a href="#toc">&uarr;</a></h2>

First you need to import

```javascript
import { useScreen } from 'react-hooks-plus';
```

Then, you can use this hook in your component like this:

> The `useScreen` hook `returns two states width and height`

> Both states, as their name suggests, **show the current size of width and height**

Example :

```javascript
import { useScreen } from 'react-hooks-plus';

const MyComponent = () => {
  const { width, height } = useScreen();

  return (
    <div>
      My screen dimensions are {width}px x {height}px
    </div>
  );
};
```

---

## <h2 id="use-on-screen">useOnScreen <a href="#toc">&uarr;</a></h2>

First you need to import

```javascript
import { useOnScreen } from 'react-hooks-plus';
```

Then, you can use this hook in your component like this:

> The `useOnScreen` hook receives a `ref` as an input parameter and `returns a boolean` value

> If this boolean value is `true`, that is, the element for which we considered the ref value, **will be seen in the viewport that is exposed to the user**.

> If its value is `false`, it may be due to scrolling or..., this element is at the bottom or top of the page and the **user does not see it in the viewport**.

Example :

```javascript
import { useRef } from 'react';
import useOnScreen from 'react-hooks-plus';

function MyComponent() {
  const ref = useRef(null);
  const isOnScreen = useOnScreen(ref);

  return (
    <div ref={ref}>
      {isOnScreen ? 'Visible on screen' : 'Not visible on screen'}
    </div>
  );
}
```

---

## <h2 id="use-console">Console Hooks <a href="#toc">&uarr;</a></h2>

### <h3 id="use-con-log">useConLog <a href="#toc">&uarr;</a></h3>

First you need to import

```javascript
import { useConLog } from 'react-hooks-plus';
```

Then, you can use this hook in your component like this:

> The `useConLog` hook actually **executes once every time the state changes and prints a message in console.log**.

> You can enter as many values ​​as you want in its input parameter

**In general, this hook for debugging will greatly speed up your work**

Example :

```javascript
import useConLog from 'react-hooks-plus';

function MyComponent() {
  const [count, setCount] = useState(0);

  useConLog('Count is : ', count);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase count</button>
    </div>
  );
}
```

---

### <h3 id="useConGroup">useConGroup <a href="#toc">&uarr;</a></h3>

First you need to import

```javascript
import { useConGroup } from 'react-hooks-plus';
```

Then, you can use this hook in your component like this:

> The `useConGroup` hook actually **creates a group in your console and displays your content as a collapse**
> You can easily print your contents grouped in the console

> The first parameter of this hook is your `Content or State`
> Your second parameter is the `label of the group`, **this part is optional** and You can leave this field blank

**In general, this hook for debugging will greatly speed up your work**

Example :

```javascript
import useConsoleGroup from 'react-hooks-plus';

const MyComponent = () => {
  const data = { name: 'John', age: 27 };

  useConsoleGroup(data, 'User Data');

  // rest of your component code
};
```

### <h3 id="use-con-table">useConTable <a href="#toc">&uarr;</a></h3>

First you need to import

```javascript
import { useConTable } from 'react-hooks-plus';
```

Then, you can use this hook in your component like this:

> You can use the `useConTable` hook to log a table of our data to the console every time it changes

> 1.  The `data` parameter (First Parameter) is an **array of values ​​that you want to print in the log**
> 2.  The `columns` parameter (Second Parameter) is an **array of strings representing the properties of the objects you want to display in the table**.

**In general, this hook for debugging will greatly speed up your work**

Example :

```javascript
import React, { useState } from 'react';
import useConTable from 'react-hooks-plus';

function App() {
  const [data, setData] = useState([
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 },
  ]);

  useConTable(data, ['name', 'age']);

  // rest of your code
}

export default App;
```

---

### <h3 id="use-con-time">useConTime <a href="#toc">&uarr;</a></h3>

First you need to import

```javascript
import { useConTime } from 'react-hooks-plus';
```

Then, you can use this hook in your component like this:

> The `useConTime` hook returns two functions: `startConsole` and `endConsole`. You can call `startConsole` at the beginning of the operation you want to measure, and call `endConsole` when the operation is complete. The hook **prints the time taken to the console in milliseconds**.

> You can assign the input parameter to useConTime and you can leave it blank. This input parameter, which must be a string, **displays the text inside the console before the time**. If your text is empty, the default text is this : `Time Taken: 136ms`

> **In general, this hook for debugging will greatly speed up your work**

Example :

```javascript
import React from 'react';
import useConTime from 'react-hooks-plus';

const MyComponent = () => {
  const { startConsole, endConsole } = useConTime();

  const handleClick = () => {
    startConsole();
    // do some heavy calculations or API calls here
    endConsole();
  };

  return <button onClick={handleClick}>Click me</button>;
};

export default MyComponent;
```

---

# <h2 id="contact-me">📞 Who I am and how to communicate with me <a href="#toc">&uarr;</a></h2>

I am a Freelance Frontend Web Developer with patience and creativity and caring for projects. I am ready to cooperate with the latest technologies such as React.js and TailwindCss to build a stylish website with the best UX.

<ul>
<li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=dev.mohammadzolghadr@gmail.com&su=Subject&body=Body">Gmail : dev.mohammadzolghadr@gmail.com</a></li>
<li><a href="https://www.linkedin.com/in/mohammad-zolghadr">Linkedin : mohammad-zolghadr</a></li>
<li><a href="https://instagram.com/mozo.plus">Instagram : @mozo.plus</a></li>
<li><a href="https://github.com/mohammad-zolghadr">Github : mohammad-zolghadr</a></li>
</ul>

---

The current version of react-hooks-plus includes the functions and hooks that were tested and presented in the initial version

If you find any ideas, suggestions, problems or bugs, please let me know

The main forum for free and community support is the project [Issues](https://github.com/mohammad-zolghadr/react-hooks-plus/issues) on GitHub

🔼 Released on : April/2023 - Mohammad Zolghadr
