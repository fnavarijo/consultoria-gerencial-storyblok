<template>
  <div
    class="center banner-slide"
    :style="{ background: `url(${blok.background_image.filename})` }"
  >
    <h1 class="bold">{{ blok.title }}</h1>
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
</style>