<template>
  <footer class="footer is-font-white">
    <div class="footer__sections">
      <div class="footer__business">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nemo minima qui dolor, iusto iure.
      </div>
      <div class="footer__contact">
        <h3 class="footer__subtitle regular">Contacto</h3>
        <ul class="footer__contact-list contact-list">
          <li class="contact-list__phone">
            <a class="link" :href="`tel:+502${blok.phone}`">+502 {{blok.phone}}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer__colorlib center">Copyright ©2020 Todos los derechos reservados | Esta plantilla fue inspirada por<a href="https://colorlib.com" class="link footer__colorlib-link" target="_blank">Colorlib</a></div>
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

    &__colorlib {
      margin: px-to-rem(40) 0;
    }

    &__colorlib-link {
      margin-left: px-to-rem(5);
    }

    &__contact-list {
      list-style: none;
    }

    .contact-list {
      margin-top: px-to-rem(10);
      padding-left: px-to-rem(20);

      &__phone {
        @include list-bullet-image('\f095');
      }
    }
  }
</style>