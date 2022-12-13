<template>
  <div>
    <v-text-field
        label="제목"
        clearable
        clear-icon="mdi-close-circle"
        v-model="post.title"
    >
    </v-text-field>
    <v-text-field
        label="작성자"
        clearable
        clear-icon="mdi-close-circle"
        v-model="post.writer"
    >
    </v-text-field>
    <v-container fluid>
      <v-textarea
        clearable
        clear-icon="mdi-close-circle"
        label="내용"
        v-model="post.contents"
      ></v-textarea>
      <v-btn
        color="primary"
        @click="createPost"
      >글 작성</v-btn>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";

export default {
  name: "CreatePost",
  methods: {
    createPost() {
      axios.post('https://6385af0bbeaa64582665580e.mockapi.io/api/mock/post',this.post)
           .then(res => {
             router.push({
               name: 'postView',
               params: {postId:res.data.id},
             })
           })
           .catch(err => console.log(err));
    }
  },
  data: ()=>({
    post: {
      id: '',
      title: '',
      writer: '',
      contents: '',
    }
  }),
}
</script>

<style scoped>

</style>