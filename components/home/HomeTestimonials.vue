<template>
  <section
    class="testimonials is-font-white"
    :style="backgroundImage"
  >
    <header class="testimonials__header center">
      <span class="testimonials__subtitle">{{ blok.subtitle }}</span>
      <h2 class="testimonials__title">{{ blok.title }}</h2>
    </header>
    <VueSlickCarousel
      v-bind="carouselConfig"
      class="testimonials__slider"
    >
      <component
        v-for="blok in blok.testimonials"
        :key="blok._uid"
        :blok="blok"
        :is="blok.component | dashify"
      />
      <template #customPaging>
        <div class="custom-dot"></div>
      </template>
    </VueSlickCarousel>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';

export default {
  components: {
    VueSlickCarousel,
  },
  props: ['blok'],
  computed: {
    backgroundImage () {
      return {
        '--background-image': `url('${this.blok.background_image.filename}')`
      };
    },
    carouselConfig () {
      return {
        autoplay: true,
        arrows: false,
        slidesToShow: 2,
        dots: true,
        dotsClass: 'testimonials-dots',
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
          },
        }],
      };
    }
  } 
}
</script>

<style lang="scss" scoped>
.testimonials {
  --background-image: 'url()';
  $color-overlay: rgba(85, 119, 180, 0.9);

  @extend %background-image;

  padding: px-to-rem(50);
  background-image:
    linear-gradient(90deg, $color-overlay, $color-overlay),
    var(--background-image);


  &__header {
    flex-direction: column;
  }

  &__title {
    @include title-with-line('center') {
      color: $white;
    };
    text-align: center;
  }

  &__subtitle {
    @extend %section-subtitle;
    color: $white;
  }

  &__slider {
    margin-top: px-to-rem(30);
  }

  /deep/ .testimonials-dots {
    padding: 0;
    list-style: none;
    display: flex !important;
    place-content: center;

    li {
      display: inline-block;
      margin: 0 px-to-rem(5);
      margin-top: px-to-rem(20);

      .custom-dot {
        width: 20px;
        height: 4px;
        background-color: rgba(0, 0, 0, 0.2);
        transition: background-color .2s linear;
      }
    }

    .slick-active {
      .custom-dot {
        background-color: $white;
      }
    }
  }
}
</style>
