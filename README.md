# Package is Developing ...

# React Hooks Plus

In this package, we have developed complete hooks and functional functions for you to do your projects more easily, quickly and accurately.
Currently, the following sections have been developed and you can use them

<h3 id="toc">Table of Content </h3>

<li><a href="#installation">Installation And Conditions</a></li>
<details><summary>Functions</summary>
<ul>
<li><details>
<summary>Random Functions</summary>
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
</details></li>
<li><a href="#func-local-storage">Local Storage</a></li>
</ul>
</details>
<details><summary>Hooks</summary>
<ul>
<li><a href="#use-copy-to-clipboard">useCopyToClipboard</a></li>
<li><a href="#use-local-storage">useLocalStorage</a></li>
<li><a href="#use-document-title">useDocTitle</a></li>
<li><a href="#use-on-click-outside">useOnClickOutside</a></li>
</ul>
</details>

---

## <h2 id="installation">Installation And Conditions <a href="#toc">&uarr;</a></h2>

You can use :

`npm i react-hooks-plus`

or

`yarn add react-hooks-plus`

---

## <h2 id="use-random">Random Function <a href="#toc">&uarr;</a></h2>

### <h3 id="random-number">A Random Number <a href="#toc">&uarr;</a></h3>

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

### <h3 id="random-number-digits">A random number with an arbitrary number of digits <a href="#toc">&uarr;</a></h3>

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

### <h3 id="random-number-range">A random number with an arbitrary range <a href="#toc">&uarr;</a></h3>

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

### <h3 id="random-number-even-range">An even or odd random number with an arbitrary range <a href="#toc">&uarr;</a></h3>

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

### <h3 id="random-string">A random string containing letters <a href="#toc">&uarr;</a></h3>

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

### <h3 id="random-string-length">A random string containing letters with the ability to specify the length <a href="#toc">&uarr;</a></h3>

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

### <h3 id="random-string-symbols">A random string containing numbers, letters and symbols <a href="#toc">&uarr;</a></h3>

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

### <h3 id="random-string-symbols-length">A random string containing numbers, letters and symbols with the ability to specify the length <a href="#toc">&uarr;</a></h3>

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
