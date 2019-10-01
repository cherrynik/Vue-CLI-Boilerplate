<template lang='pug'>
  .HiScreen.container
    Greeting
    hr

    .HiScreen__icons.col-12.row.m-0.p-0
      .col-4.icons__item.pl-0
        p.item__sub
          | SVG Inline
        Visa.icon
      .col-4.icons__item
        p.item__sub.sub_center
          | SVG Img
        img.icon(:src="AmEx" :class="$style.icon_centered")
      .col-4.icons__item.pr-0
        p.item__sub.sub_right
          | SVG Styled Background
        .icon(:class="$style.icon_right")

    hr

    div(:class="$style.imgGroup")
      // It doesn't crash, if file is included simply, like this (SVG)
      img.imgGroup__item(src='@public/img/icon-add.svg')

      a.imgGroup__link(href='#') {{ message }}

      // It doesn't crash, if file is included simply, like this (PNG)
      img.imgGroup__item(src='../../public/img/webpack.png')
</template>

<script>
import Visa from '@public/img/icons/icon-visa.svg?inline';
import AmEx from '@public/img/icons/icon-amex.svg';

import Greeting from '@/block/common/components/example/example.vue';

export default {
  name: 'Example',
  components: {
    Visa,
    Greeting,
  },
  computed: {
    AmEx() { return AmEx; },
  },
  // eslint-disable-next-line
  data() {
    return {
      message: 'Click me',
    };
  },
};
</script>

<style lang="scss" scoped>
  .HiScreen {
    align-items: center;
    justify-content: center;
  }

  .icons {

    &__item {

      .icon {
        display: block;
      }
    }
  }

  .sub {

    &_center {
      text-align: center;
    }

    &_right {
      text-align: right;
    }
  }

  .imgGroup {

    &__item {
      width: 128px;
      height: 128px;
    }
  }
</style>

<style lang="scss" module>
  .icon_centered {
    margin: 0 auto;
  }

  .icon_right {
    width: 48px;
    height: 48px;
    margin-left: auto;

    background-image: url('../../public/img/icons/icon-mastercard.svg');
  }

  .imgGroup {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;
  }
</style>
