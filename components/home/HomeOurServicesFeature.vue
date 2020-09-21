<template>
  <div class="services-feature">
    <div class="services-feature__icon-wrapper">
      <img
        v-if="hasHeaderImage"
        class="services-feature__icon"
        :src="blok.header_image.filename"
        alt=""
      >
    </div>
    <h3 class="services-feature__title regular">{{ blok.title }}</h3>
    <span class="services-feature__description">
      {{ blok.description }}
    </span>
    <button class="button">
      Aprende más
    </button>
  </div>
</template>

<script>
export default {
  props: ['blok'],
  computed: {
    hasHeaderImage () {
      return !!this.blok.header_image;
    },
  }
}
</script>

<style lang="scss" scoped>
.services-feature {
  display: flex;
  flex-direction: column;
  background-color: $white;
  margin: 0 px-to-rem(10) px-to-rem(10) px-to-rem(10);
  padding: 0 px-to-rem(20) px-to-rem(20) px-to-rem(20);
  place-content: flex-start;
  place-items: center;

  &__title {
    color: $black;
    margin-top: px-to-rem(30);
  }

  &__description {
    margin-bottom: px-to-rem(10);
  }

  &__icon-wrapper {
    @include hexagon-shape;
    top: 0;
  }

  &__icon {
    @include square-asset(40);

    position: absolute;
    z-index: 5;
    left: 0;
    right: 0;
    margin: auto;
    top: 50%;
    transform: translateY(-50%);
    filter: brightness(200%);
  }
}

@include touch {
  .services-feature {
    &__title {
      text-align: center;
    }
  }
}
</style>