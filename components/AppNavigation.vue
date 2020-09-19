<template>
  <div v-editable="blok" class="app-navigation">
    <ul class="app-navigation__list">
      <li
        v-for="(link, index) in blok.links.items"
        :key="index"
        class="app-navigation__list-item"
      >
        {{ link }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style scoped>
.app-navigation {
  height: 75px;
  display: flex;
  place-items: center;
}

.app-navigation__list {
  display: flex;
}

.app-navigation__list-item {
  list-style-type: none;
  margin-right: 25px;
}
</style>