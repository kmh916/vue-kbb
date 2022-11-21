<template>
    <v-main>
      <Nav></Nav>
      <router-view/>
    </v-main>
</template>

<script>

import Nav from "@/views/Nav";
export default {
  name: 'App',
  components: {Nav},
  data: () => ({
    //
  }),
};
</script>
