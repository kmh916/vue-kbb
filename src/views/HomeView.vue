<template>
  <div>
      <v-data-table
          dense
          :headers="headers"
          :items="posts"
          item-key="name"
          class="elevation-1"
          @click:row="showPost"
      ></v-data-table>
    <v-btn
        color="primary"
        @click="createPost"
    >글쓰기</v-btn>
  </div>
</template>

<script>

  import axios from "axios";

  export default {
    name: 'Home',
    methods: {
      showPost(e){
        this.$router.push({
          name: 'postView',
          params: {postId:e.id},
        })
      },
      createPost(){
        this.$router.push({
          name: 'createPost',
        })
      },
      getPosts(){
        axios.get('https://6385af0bbeaa64582665580e.mockapi.io/api/mock/post')
             .then(res=>{
               res.data.map(item =>
                 this.posts.push(item)
               );
             })
             .catch(err=>console.log(err));
      }
    },
    data: ()=> ({
      posts : [],
      headers : [
          {
            text: '작성자',
            sortable: false,
            value: 'writer',
          },
          {
            text: '제목',
            sortable: false,
            value: 'title',
          },
      ]
    }),
    created() {
      this.getPosts();
    },
    components: {
    },
  }


</script>
