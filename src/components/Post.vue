<template>
  <div class="wrapper">
    <div class="blog_post">
      <div class="container_copy">
        <h1>{{ post.title }}</h1>
        <p>{{ post.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Post',
    props: {
      post: Object
    },

  }
</script>

<style scoped>
  @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap");

  .wrapper {
    height: 50%;
    width: 100%;
    height: 50vh;
  }

  .blog_post {
    position: relative;
    padding: 2rem 1rem 1rem 2rem;
    background: #fff;
    max-width: 80%;
    border-radius: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 1px 1px 2rem rgba(0, 0, 0, 0.3);
  }


  h3 {
    margin: 0 0 0.5rem 0;
    color: #999;
    font-size: 1.25rem;
  }

  h1 {
    margin: 0 0 1rem 0;
    font-size: 2.5rem;
    letter-spacing: 0.5px;
    color: #333;
  }

  p {
    margin: 0 0 4.5rem 0;
    font-size: 1.5rem;
    color: #333;
  }
</style>
