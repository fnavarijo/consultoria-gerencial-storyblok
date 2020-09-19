<template>
  <div v-editable="blok" class="grid">
    <component
      v-for="blok in blok.columns"
      :key="blok._uid"
      :blok="blok"
      :is="blok.component | dashify"></component>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>
