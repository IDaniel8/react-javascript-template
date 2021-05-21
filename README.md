<img src="./src/assets/react.svg" alt="IDaniel" width="80">

> React Webpack 5

## Pre Requisites

In order to start must have installed node >= 10.0.0 and npm >= 6.0.0

Note: i encourage you to use better `yarn` than `npm` but is a thing of preference.

## Quick start

To start must install the packages first using

```bash
yarn install
```

Then in order to start

```bash
yarn start:dev
```

To build

```bash
yarn build
```

### Architecture

This infraestructure uses the latest version on react and its constructed with hooks and functional components.
the architecture its based on styling with styled components and immer for immutability (store changes under the hood with redux-toolkit), with another tools like:

_for the styling => styled-components_ [docs](https://styled-components.com/)<br/>
_for storage async handler => redux-thunk_ [docs](https://github.com/reduxjs/redux-thunk)<br/>
_for storage handler => redux-toolkit_ [docs](https://redux-toolkit.js.org/)<br/>
_for routing pages => react-router-dom_ [docs](https://reactrouter.com/)<br/>

Note: it has core-js polifylls added on usage to support IE11 in case.

### TODOS

- add eslint for code styling
- add husky for code protection
- add cache buster pattern
- add moduleFederation feature by webpack 5
