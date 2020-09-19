<template>
  <div class="banner-slider">
    <VueSlickCarousel :swipe="false">
      <component
        v-for="blok in blok.slides"
        :key="blok._uid"
        :blok="blok"
        :is="blok.component | dashify"
      />
      <template #prevArrow>
        <span class="center banner-slider__navigation-btn banner-slider__prev">
          <ArrowLeftSvg />
        </span>
      </template>
      <template #nextArrow>
        <span class="center banner-slider__navigation-btn banner-slider__next">
          <ArrowRightSvg />
        </span>
      </template>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import ArrowLeftSvg from '~/assets/img/arrow-left.svg?inline';
import ArrowRightSvg from '~/assets/img/arrow-right.svg?inline';

export default {
  components: {
    VueSlickCarousel,
    ArrowLeftSvg,
    ArrowRightSvg,
  },
  props: ['blok']
}
</script>

<style lang="scss" scoped>
.banner-slider {
  overflow: hidden;

  &__navigation-btn {
    @include square-asset(50);

    color: $black;
    background-color: $white;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 5;
    opacity: .7;
    transition: opacity .3s linear;

    /deep/ path {
      fill: $gray-500;
    }

    &:hover {
      opacity: 1;
    }
  }

  &__prev {
    left: px-to-rem(25);
  }

  &__next {
    right: px-to-rem(25);
  }
}
</style>
