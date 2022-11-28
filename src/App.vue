<template>
  <v-app>
    <v-main>
      <Header/>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import Nav from "@/views/layout/Nav";
import Header from "@/views/layout/Header";
export default {
  name: 'App',
  components: {Header, Nav},
  data: () => ({
    //
  }),
};
</script>
