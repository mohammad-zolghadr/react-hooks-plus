# Package is Developing ...

# React Hooks Plus

In this package, we have developed complete hooks and functional functions for you to do your projects more easily, quickly and accurately.
Currently, the following sections have been developed and you can use them

<h3 id="toc">Table of Content </h3>

<li><a href="#installation">Installation And Conditions</a></li>
<details>
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
</details>
<li><a href="#copy-to-clipboard">useCopyToClipboard</a></li>

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
import { randomNumber } from 'react-hooks-plus/funcs';
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
import { randomNumberDigit } from 'react-hooks-plus/funcs';
```

And then to use it, proceed as follows :

> As the input parameter of the function, you must enter a number so that your final output is a number with the desired number of digits

```javascript
console.log(randomNumberDigit(7));
```

In this example, your log output will be a `7-digit random number`

---

### <h3 id="random-number-range">A random number with an arbitrary range <a href="#toc">&uarr;</a></h3>

First you need to import

```javascript
import { randomNumberRange } from 'react-hooks-plus/funcs';
```

And then to use it, proceed as follows :

> As the input parameter of the function, you must enter two numbers as `min` and `max` so that your final output is a number in your desired range.

```javascript
console.log(randomNumberRange(1, 100));
```

In this example, your log output will be a `random number between 1 and 100`

---

### <h3 id="random-number-even-range">An even or odd random number with an arbitrary range <a href="#toc">&uarr;</a></h3>

First you need to import

```javascript
import { randomNumberEven } from 'react-hooks-plus/funcs';
```

And then to use it, proceed as follows :

> As the input parameter of the function, you must enter a boolean value and two numbers as min and max. If the first parameter is true, it means your output is an `even number` and if it is false, it means your output is an `odd number`.
> The second and third parameters are related to your `determining the random number range`

```javascript
console.log(randomNumberEven(true, 1, 100));
```

In this example, your log output will be an `even random number between 1 and 100`

---

### <h3 id="random-string">A random string containing letters <a href="#toc">&uarr;</a></h3>

First you need to import

```javascript
import { randomString } from 'react-hooks-plus/funcs';
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
import { randomStringLength } from 'react-hooks-plus/funcs';
```

And then to use it, proceed as follows :

> As an input parameter to the function, you must assign a number to it, which determines the `length of your string`

```javascript
console.log(randomStringLength(12));
```

By doing this, your log output will be a `random string of 12 characters long`

---

### <h3 id="random-string-symbols">A random string containing numbers, letters and symbols <a href="#toc">&uarr;</a></h3>

First you need to import

```javascript
import { randomStringSymbols } from 'react-hooks-plus/funcs';
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
import { randomStringSymbolsLength } from 'react-hooks-plus/funcs';
```

And then to use it, proceed as follows :

> As an input parameter to the function, you must assign a number to it, which determines the `length of your string`

```javascript
console.log(randomStringSymbolsLength(12));
```

By doing this, your log output will be a `random string of letters, numbers, and symbols that is 12 characters long`

---

## <h2 id="copy-to-clipboard">useCopyToClipboard <a href="#toc">&uarr;</a></h2>

First you need to import

```javascript
import { useCopyToClipboard } from 'react-hooks-plus/hooks';
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
