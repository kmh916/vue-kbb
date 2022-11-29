<template>
  <v-toolbar
      color=blue
      elevation="3"
  >
    <v-btn
        icon
        class="hidden-xs-only"
        @click="goBack"
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <router-link to="/" style="color: black">게시판이에요</router-link>
  </v-toolbar>
</template>

<script>
export default {
  name: "Header.vue",
  methods :{
    goBack(){
      this.$router.go(-1);
    }
  },
}
</script>

<style scoped>

</style>