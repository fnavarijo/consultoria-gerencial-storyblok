<template>
  <div
    class="center banner-slide"
    :style="{ backgroundImage: `url(${blok.background_image.filename})` }"
  >
    <h1 class="banner-slide__title bold">{{ blok.title }}</h1>
    <p class="is-medium">{{ blok.subtitle }}</p>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style lang="scss" scoped>
.banner-slide {
  // TODO: dont use important
  display: flex !important;
  flex-direction: column;
  height: 100vh;
  color: $white;
  background-repeat: no-repeat;
  background-position: top left;
  background-size: cover;
}

@include touch {
  .banner-slide {
    background-position: center center;

    &__title {
      text-align: center;
      line-height: 1;
      margin-bottom: px-to-rem(20);
    }
  }
}
</style>