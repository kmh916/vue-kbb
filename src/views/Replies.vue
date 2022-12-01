<template>
  <div>
    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>{{reply.writer}} 님의 댓글</v-list-item-title>
          <v-list-item-subtitle>내용 : {{reply.contents}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "Replies",
  props:{
    reply:{
      type: Object,
    }
  }
}
</script>

<style scoped>

</style>