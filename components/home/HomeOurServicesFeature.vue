<template>
  <div class="services-feature">
    <h2 class="services-feature__title">{{ blok.title }}</h2>
    <span>
      {{ blok.description }}
    </span>
    <button>
      Aprende más
    </button>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style lang="scss" scoped>
.services-feature {
  display: flex;
  flex-direction: column;
  background-color: $white;

  &__title {
    color: $black;
  }
}
</style>