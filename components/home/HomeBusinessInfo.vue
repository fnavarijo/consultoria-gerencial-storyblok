<template>
  <section
    class="business-info"
    :style="sectionItems"
  >
    <component
      v-for="blok in blok.items"
      :key="blok._uid"
      :blok="blok"
      :is="blok.component | dashify"
    />
  </section>
</template>

<script>
export default {
  props: ['blok'],
  computed: {
    sectionItems () {
      return {
        '--section-items': this.blok.items.length,
      };
    }
  },
}
</script>

<style lang="scss" scoped>
.business-info {
  --section-items: 2;
  display: grid;
  grid-template-columns: repeat(var(--section-items), 1fr);
  width: 50%;
  margin: auto;
  margin-bottom: px-to-rem(10);
}

@include touch {
  .business-info {
    width: auto;
  }
}
</style>