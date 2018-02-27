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
b(["&__component", "&__modified"]) // returns Block__component Block--modifier
```

2. With an string
```javascript
const b = bem("Block");
b("&__component") // returns Block__component
```

2. With an object (for conditional classes)
```javascript
const b = bem("Block");
b({ "&__component": true, "&--disabled": false }) // returns Block__component
b({ "&__component": true, "&--disabled": true }) // returns Block__component Block--disabled
```
