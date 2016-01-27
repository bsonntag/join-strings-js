# join-strings
> Join **ALL** the strings!

```
npm install --save join-strings
```

## Usage

With a delimiter:

```
var joinStrings = require('join-strings');
joinStrings(', ', 'hello', 'world');
// returns 'hello, world'
```

With an options object:

```
var joinStrings = require('join-strings');
joinStrings({ delimiter: ' ', prefix: '> ', suffix: '!' }, 'hello', 'world');
// returns '> hello world!'
```

With an array of strings:

```
var joinStrings = require('join-strings');
joinStrings(', ', ['hello', 'world']);
// returns 'hello, world'
```

