<template>
  <footer class="footer is-font-white">
    <div class="footer__sections">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nemo minima qui dolor, iusto iure.
      <div class="footer__contact">
        <h3 class="footer__subtitle regular">Contacto</h3>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: ['blok'],
}
</script>

<style lang="scss" scoped>
  .footer {
    background-color: $blue-800;
    padding: px-to-rem(30) px-to-rem(50);

    &__sections {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    &__subtitle {
      text-transform: capitalize;
      display: inline-block;
      line-height: 1.2;
      font-size: $medium;
      border-bottom: 3px solid $white;
    }
  }
</style>