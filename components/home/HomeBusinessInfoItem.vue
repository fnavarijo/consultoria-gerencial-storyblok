<template>
  <div class="business-item">
    <strong class="business-item__info">{{ blok.item_information }}</strong>
    <span>{{ blok.item_title }}</span>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style lang="scss" scoped>
.business-item {
  display: flex;
  flex-direction: column;
  text-align: center;

  &__info {
    font-size: $large;
    color: $black;
  }
}
</style>