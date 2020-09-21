<template>
  <!-- TODO: Animation on scroll -->
  <section
    class="home-hero hero center"
    :style="{ backgroundImage: `url(${blok.background_image.filename})` }"
  >
    <h2 class="home-hero__title is-font-white bold">{{blok.text}}</h2>
  </section>
</template>

<script>
export default {
  props: ['blok'],
}
</script>

<style lang="scss" scoped>
.home-hero {
  padding: px-to-rem(50);
  background-repeat: no-repeat;
  background-size: cover;

  &__title {
    text-align: center;
    font-size: $xxx-large;
    line-height: 1;

    &::before,
    &::after {
      content: "\"";
    }
  }
}

@include touch {
  .home-hero {
    background-position: center center;
    &__title {
      font-size: $x-large;
    }
  }
}
</style>