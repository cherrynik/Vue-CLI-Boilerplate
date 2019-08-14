<template lang="pug">
  .container
    p hello there.
    .col-wrap
      i.icon.icon-1
      i.icon.icon-2
      i.icon.icon-3
    svg
      use(xlink:href='#icon-add')
    img(src='./assets/img/webpack.png')
    img(src='./assets/img/icon-add.svg')
    img(src='./assets/img/icons/icon-add.svg' :alt="message")
    p {{ message }}
</template>

<script>
export default {
  data () {
    return {
      message: 'Example Vue component',
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
}
img {
  max-width: 200px;
}
</style>