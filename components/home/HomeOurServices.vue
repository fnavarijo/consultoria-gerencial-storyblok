<template>
  <section class="our-services">
    <div>
      <span>Hi</span>
      <h2>{{ blok.title }}</h2>
    </div>
    <div class="our-services__features">
      <component
        v-for="feature in blok.features"
        :key="feature._uid"
        :blok="feature"
        :is="feature.component | dashify"
      />
    </div>
  </section>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style lang="scss" scoped>
.our-services {
  background-color: $gray-200;

  &__features {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>