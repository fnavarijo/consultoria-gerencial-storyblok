<template>
  <div v-editable="blok" class="navigation">
    <ul class="navigation__list">
      <li class="navigation__list-item">
        <NuxtLink
          to="/"
          class="navigation__link is-font-black"
        >
          Inicio
        </NuxtLink>
      </li>
      <li class="navigation__list-item">
        <NuxtLink
          to="/"
          class="navigation__link is-font-black"
        >
          Nosotros
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style lang="scss" scoped>
  .navigation {
    height: px-to-rem(75);
    display: flex;
    place-items: center;

    &__list {
      display: flex;
    }

    &__list-item {
      list-style-type: none;
      margin-right: px-to-rem(25);
      position: relative;

      &::after {
        content: '';
        position: absolute;
        height: 2px;
        bottom: 0;
        left: 0;
        width: 0;
        background-color: $blue-500;
        transition: width .2s linear;
      }

      &:hover {
        &::after {
          width: 100%;
        }
      }

    }

    &__link {
      text-decoration: none;
    }
  }

</style>
