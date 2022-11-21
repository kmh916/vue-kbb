<template>
  <v-tabs
      fixed-tabs
      background-color="indigo"
  >
    <v-tab v-for="i in item" :key="item">
      {{i}}
    </v-tab>
  </v-tabs>
</template>

<script>
export default {
  name: "Nav.vue",
  data: () => ({
    item: ['k','b','c','d'],
  }) ,

}
</script>

<style scoped>

</style>