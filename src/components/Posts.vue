<template>
  <router-link to="/">
    <Button text="Go Back"/>
  </router-link>
  <div :key="post.id" v-for="post in posts">
    <Post :post="post"/>
  </div>

</template>

<script>
  import axios from "axios";
  import Post from "./Post";
  import Button from "./Botton";

  export default {
    name: 'Posts',
    components: {
      Button,
      Post
    },
    data() {
      return {
        posts: [],
        userId: ''
      }
    },
    async created() {
      this.userId = this.$route.params.userId;
      const userReq = await axios.get(`https://ebe638107h.execute-api.eu-central-1.amazonaws.com/prod/posts?userId=${this.userId}`);
      this.posts = userReq.data;
    }
  }
</script>
