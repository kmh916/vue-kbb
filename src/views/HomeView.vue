<template>
  <div>
    <template>
      <v-data-table
          dense
          :headers="headers"
          :items="posts"
          item-key="name"
          class="elevation-1"
          @click:row="showPost"
      ></v-data-table>
    </template>
  </div>
</template>

<script>

  export default {
    name: 'Home',
    methods: {
      showPost(){
        this.$router.push({
          // path:'/post',
          name: 'postView',
          params: {postId:'12'},
        })
      },
    },
    data: ()=> ({
      posts : [
        {
          writer: 'kmh',
          title: '안녕안녕',
        },
      ],
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
    components: {
    },
  }


</script>
