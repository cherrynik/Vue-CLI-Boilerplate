# Boilerplate: Vue CLI 4.0
![Vue CLI 4.0](https://miro.medium.com/proxy/1*kz9D-JB0Lrk4RfhInh_3fg.png "Vue CLI 4.0")

# Getting started
1. Install [Node.JS](https://nodejs.org/en/)
2. Write in bash: `git clone git@github.com:ighosta9/Vue-CLI-Boilerplate.git && cd ~/Vue-CLI-Boilerplate && npm i`
> These procedurals will have cloned this boilerplate to your local storage, then it'll be opened where it was cloned and then there are being installed every dependencies of this project.

# Available commands
1. `npm run dev` - Vue CLI using Webpack DevServer
2. `npm run build` - Vue CLI production
3. `npm run server` - Localhost reads folder "./dist"
4. `npm run inspect` - Vue outputs Webpack config

# Style guide
1. SCSS - [Rational order](https://www.npmjs.com/package/stylelint-config-rational-order "Styleguide")

2. SCSS Architecture - [Aesthetic](https://scotch.io/tutorials/aesthetic-sass-1-architecture-and-style-organization)

3. JavaScript - [Airbnb](https://github.com/airbnb/javascript)

# SASS/SCSS Fonts including

* Fonts are stored at the `./src/assets/fonts`

```scss
@include font-face(
  'Example', // Font name
  '../fonts/Example/Example', // Path to font that is relatived off main.scss
  null, // Font weight
  normal, // Font style
  svg ttf // Font extensions
);
```

# SVG Including in Vue

1. Inline SVG:

```pug
<template lang='pug'>
  // ...
  Visa
  // ...
</template>

<script>
import Visa from '@public/img/icons/icon-visa.svg?inline';

export default {
  // ...
  components: {
    Visa,
  },
  // ...
};
</script>
```

2. By img tag:

```pug
<template lang='pug'>
  // ...
  img(:src="AmEx")
  // ...
</template>

<script>
import AmEx from '@public/img/icons/icon-amex.svg';

export default {
  // ...
  computed: {
    AmEx() {
      return AmEx;
    },
  },
  // ...
};
</script>
```