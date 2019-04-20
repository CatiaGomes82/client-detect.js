# client-detect.js
The client detect library creates a client object with information about devices, browsers, operating systems and feature support. This facilitates cross compatibility.

### Browsers
 - Edge
 - Chrome
 - Opera
 - Firefox
 - Safari
 - Internet Explorer
	 - IE 11
	 - IE 10
	 - IE 9

## Installation
1. Get the minified version of the library from the '/dist' folder.
2. Add file to the page. Example:
```
<script src="/src/client-detect.js"></script>
```
3. Initialise library and you will be able to access the 'clientDetect' object
```
client.init();
console.log(clientDetect)
```
 
## Release information
#### 1.0.0
Initial version