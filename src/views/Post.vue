<template>
  <div>
    <v-card
        elevation="2"
    >
      <v-card-title>제목 : {{post.title}}</v-card-title>
      <v-card-subtitle>  글 번호 : {{post.id}} , 작성자 : {{post.writer}}</v-card-subtitle>
      <v-card-title>{{post.contents}}</v-card-title>
    </v-card>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "Post",
  methods: {
    getPost(postId){
      axios.get('https://6385af0bbeaa64582665580e.mockapi.io/api/mock/post/'+postId)
           .then(res=>{
              this.post.id = res.data.id;
              this.post.title = res.data.title;
              this.post.writer = res.data.writer;
              this.post.contents = res.data.contents;
           })
           .catch(err => {
             console.log(err,'err')
           })

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
  created() {
    this.getPost(this.$route.params.postId);
  }
}
</script>

<style scoped>

</style>