<template>
  <section class="home-about">
    <img class="home-about__img" :src="blok.image.filename" alt="">
    <div class="home-about__info">
      <header>
        <span class="home-about__subtitle">{{blok.about_us_subtitle}}</span>
        <h2 class="home-about__title">{{blok.about_us_title}}</h2>
      </header>
      <p class="home-about__description">{{blok.about_us_description}}</p>
      <ul class="home-about__items">
        <li
          v-for="(item, index) in blok.about_us_items.items"
          :key="index"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style lang="scss" scoped>
.home-about {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: px-to-rem(30);
  padding: px-to-rem(50);

  &__info {
    margin-left: px-to-rem(50);
  }

  &__img {
    max-width: 100%;
    justify-self: center;
  }

  &__subtitle {
    @extend %section-subtitle;
  }

  &__title {
    @include title-with-line;
    margin-bottom: px-to-rem(20);
  }

  &__description {
    color: $gray-500;
    margin-bottom: px-to-rem(15);
  }

  &__items {
    list-style: none;
    padding-left: px-to-rem(20);

    & > li {
      &::before {
        font-family: icomoon;
        content: '\e5c8';
        color: $blue-500;
      }
    }
  }
}

@include touch {
  .home-about {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    grid-gap: px-to-rem(30);
    padding: px-to-rem(50) px-to-rem(20);

    &__info {
      margin-left: 0;
    }
  }
}
</style>
