# Boilerplate: Webpack + Vue.JS

![Webpack + Vue.JS](https://miro.medium.com/max/700/1*i28tdUZj1oq6BvNyWwPSgA.png "Webpack + Vue.JS")

Get started
===

1. Install [Node.JS](https://nodejs.org/en/)
2. Write in bash: `git clone git://github.com/ighosta9/webpack-ideal.git && cd ~/webpack-ideal && npm i`
> These procedurals will cloned this boilerplate to your local storage then it will be opened where it was cloned and then every dependencies of this project will be installed 

Now you can use the next commands:
1. `npm run dev` - It will start the `devServer` at `localhost:8081`
2. `npm run build` - It will build the project

[More about it...](#Development/Production-modes)

## Development/Production modes
In the project we have the modes:
1. Development (`--mode=development`)
2. Production (`--mode=production`)

All needs plugins, loaders, etc included at beginning of [webpack.config.js](https://github.com/ighosta9/webpack-ideal/blob/master/webpack.config.js), for example:
```js
const NameOfDependency = require('./devDependencies/name-of-dependency.js')
```

So, dependency, that you want to tune, you can tune it is as:
1. Open your file of dependency, for example: [./devDependencies/svg-sprite-loader.js](https://github.com/ighosta9/webpack-ideal/blob/master/devDependencies/svg-sprite-loader.js).
2. And write settings here:

```js
module.exports =  function () {
  return {
    ... // <- Here
  }
};
```

*(In the variable `common` we have base data, that webpack always uses in every mode.)*
```js
const common = merge([
  ...
]);
```

3. To run dependency default, call this in [webpack.config.js](https://github.com/ighosta9/webpack-ideal/blob/master/webpack.config.js)
, using this method:

```js
const common = merge([
  { ... },
  NameOfDependency()
]);
```

4. But if you want to call it in the development or production mode, look at these rows in [webpack.config.js](https://github.com/ighosta9/webpack-ideal/blob/master/webpack.config.js), at the end:
```js
module.exports = function(env, argv) {
  if (argv.mode === 'production') {
    return merge([
      common, // <- This is default running settings
      ... // <- Here we call our dependencies in production mode
    ]);
  }
  if (argv.mode === 'development') {
    return merge([
      common, // <- This is too default running settings
      ... // <- And here in development mode
    ]);
  }
};
```
