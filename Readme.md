 # analyze-global-variables
 
Prints out the variables, that are defined on the global scope in a passed javascript file.
Only variables, that are defined while loading the file are returned.
 
 
## Why??

While refactoring and analyzing very old legacy code, I had to expose all the variables, that the code exposed to window, via webpack.
I tried a lot of things, and came up with this module. 


## How??

The passed javascript file is loaded in puppeteer inside a prepared html document.
Before loading the file, all variable names on window are stored.
After loading the file, the diff between the previous and the now defined variable names are returned

## Usage

### CLI

`analyze-global-variables my-javascript-file.js`
This returnes prerendered source code to redefine the variables on window.

Example:

```js
window['myglobal'] = myglobal;
window['myotherglobal'] = myotherglobal;
``` 
 
### Programmatic Usage

```js
const extractGlobals = require('./extract-globals');
extractGlobals('./my-javascript-file.js')
    .then(result =>{
        console.log(result);
        // result is an array of all variable names. e.g. ['myglobal', 'myotherglobal']
    });
```