<template>
  <section class="our-services">
    <header class="our-services__header">
      <span class="our-services__subtitle">{{ blok.subtitle }}</span>
      <h2 class="our-services__title">{{ blok.title }}</h2>
    </header>
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
  padding: px-to-rem(80) px-to-rem(50);
  margin-top: px-to-rem(50);

  &__features {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: px-to-rem(30);
    margin-top: px-to-rem(60);
  }

  &__header {
    text-align: center;
  }

  &__subtitle {
    @extend %section-subtitle;
  }

  &__title {
    @include title-with-line('center');
  }
}

@include touch {
  .our-services {
    padding: px-to-rem(80) px-to-rem(20);

    &__features {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>