<template>
  <footer class="footer is-font-white">
    <div class="footer__sections">
      <div class="footer__business">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nemo minima qui dolor, iusto iure.
      </div>
      <div class="footer__contact">
        <h3 class="footer__subtitle regular">Contacto</h3>
        <ul>
          <li>
            +502 22556644
          </li>
        </ul>
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
      grid-template-columns: repeat(4, 1fr);
      grid-gap: px-to-rem(50);
    }

    &__subtitle {
      text-transform: capitalize;
      display: inline-block;
      line-height: 1.2;
      font-size: $medium;
      border-bottom: 3px solid $white;
    }

    &__business {
      font-size: px-to-rem(14);
    }
  }
</style>