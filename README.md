## bem

`bem` is a small helper function for managing BEM classes.

### Install
`npm install --save @maxwellmri/bem`

### Usage
`bem` can be used 3 ways.

1. With an array
```javascript
const b = bem("Block");
b(["&__component"]) // returns Block__component
ub(["&__component", "&--modified"]) // returns Block__component Block--modifier
```

2. With an string
```javascript
const b = bem("Block");
b("&__component") // returns Block__component
```

3. With an object (for conditional classes)
```javascript
const b = bem("Block");
b({ "&__component": true, "&--disabled": false }) // returns Block__component
b({ "&__component": true, "&--disabled": true }) // returns Block__component Block--disabled
```

4. With multiple arguments
```javascript
const b = bem("Block");
b(["&", "&--disabled"], "random") // returns Block Block--disabled random
b(["&", "&--disabled"], { "fizz": true, "buzz": false }) // returns Block Block--disabled fizz
```
