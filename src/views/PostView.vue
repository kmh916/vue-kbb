<template>
  <div>
   <Post :postId="postId"/>
   <Reply v-for="reply in replies" :reply="reply"/>
   <CreateReply :postId="postId" @update="getReplies(postId)"/>
  </div>
</template>

<script>

import Post from "@/components/Post";
import CreateReply from "@/components/CreateReply";
import Reply from "@/components/Reply";
import axios from "axios";
export default {
  name: "PostView",
  components: {Reply, CreateReply, Post},
  data: ()=>({
    postId: 0,
    replies: [

    ]
  }),
  methods: {
    getReplies(postId) {
      axios.get('https://6385af0bbeaa64582665580e.mockapi.io/api/mock/post/'+postId+'/reply')
          .then(res => {
            this.replies = res.data
          })
          .catch(err => console.log(err))
    },
  },
  created() {
    this.postId = Number(this.$route.params.postId);
    this.getReplies(this.postId);
  }
}
</script>

<style scoped>

</style>