<template lang="pug">
  mixin hello()
    ul
      li Hmmm OKAY
  - let arr = 'Mother Fuck'
  .container
    p hello there.
    .col-wrap
      i.icon.icon-1
      i.icon.icon-2
      i.icon.icon-3
    .div
      inline
      img(:src="externalSVG")
      .external-svg
        icon
      p= arr
    img(src='../../public/img/webpack.png')
    img(src='../../public/img/icon-add.svg')
    p {{ message }}
    +hello()
</template>

<script>
// eslint-disable-next-line
import inline from '../../public/img/icons/icon-amex.svg?inline';
import icon from '../../public/img/icons/icon-add.svg';

export default {
  name: 'Example',
  components: {
    inline,
  },
  computed: {
    externalSVG() {
      return icon;
    },
  },
  // eslint-disable-next-line
  data() {
    return {
      message: 'Zdarova',
    };
  },
};
</script>

<style lang="sass" scoped>
  // 132
  .container
    display: flex
    align-items: center
    flex-direction: column
    color: white
    background-image: url('../../public/img/icons/icon-arrow.svg')

  img
    width: 150px
</style>
