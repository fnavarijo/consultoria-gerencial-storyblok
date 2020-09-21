<template>
  <div class="testimonials-content">
    <header class="testimonials-content__header">
      <img class="testimonials-content__profile" :src="blok.profile_image.filename" alt="">
      <div class="testimonials-content__profile-info">
        <h3>{{ blok.name }}</h3>
        <span class="testimonials-content__role">{{ blok.role }}</span>
      </div>
    </header>
    <p class="testimonials-content__content">{{ blok.content }}</p>
  </div>
</template>

<script>
export default {
  props: ['blok'],
}
</script>

<style lang="scss" scoped>
.testimonials-content {
  padding: px-to-rem(10);

  &__role,
  &__content {
    font-weight: 300;
    opacity: 0.5;
  }

  &__content {
    font-size: px-to-rem(20);

    &::after,
    &::before {
      content: '"';
    }
  }

  &__header {
    display: flex;
    place-items: center;
    margin-bottom: px-to-rem(20);
  }

  &__profile {
    @include square-asset(50);
    border-radius: 50%;
    margin-right: px-to-rem(15);
  }

  &__profile-info {
    line-height: 1;
  }
}
</style>