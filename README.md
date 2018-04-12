# Spacecrypt

[![NPM Package](https://img.shields.io/npm/v/spacecrypt.svg?style=flat-square)](https://www.npmjs.org/package/spacecrypt)

# Install

```
npm install spacecrypt --save
```

# Use

```
// import Spacecrypt from 'spacecrypt';
const Spacecrypt = require('spacecrypt');

const publicMessage = 'Hello';
const privateMessage = 'World';

const encodedMessage = Spacecrypt.encrypt(publicMessage, privateMessage);
console.log(encodedMessage); // 'Hello'
const decodedMessage = Spacecrypt.decrypt(encodedMessage);
console.log(decodedMessage); // 'World'


assert(decodedMessage === privateMessage);
```


### Inspired by:

https://pug.sh/steganographr/

https://twitter.com/nwbld
