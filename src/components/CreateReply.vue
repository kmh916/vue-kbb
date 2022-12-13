<template>
  <div>
    <v-text-field
        label="작성자"
        hide-details="auto"
        v-model="createdReply.writer"
    ></v-text-field>
    <v-text-field label="내용" v-model="createdReply.contents"></v-text-field>
    <v-btn
        color="primary"
        @click="createReply"
    >댓글 작성</v-btn>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CreateReply",
  props: {
    postId : {
      type: Number,
    }
  },
  data: () =>({
    createdReply: {
      writer: '',
      contents: ''
    },
  }),
  methods:{
    createReply(){
      axios.post('https://6385af0bbeaa64582665580e.mockapi.io/api/mock/post/'+this.$props.postId+'/reply',this.createdReply)
           .then(() => this.sendEvent())
           .catch(err => console.log(err));
    },
    sendEvent (){
      this.$emit('update');
    }
  },
}
</script>

<style scoped>

</style>