<template>
  <div class="main">
    <div class="container">
      <img class="profile-img"
           :src='`https://randomuser.me/api/portraits/men/${user.id}.jpg`' >
      <img class="background-img" src="https://s3.eu-central-1.amazonaws.com/uploads.mangoweb.org/shared-prod/visegradfund.org/uploads/2019/11/canva-literary-book-pages-background.jpg">
      <p class="name"><img class="icon"
                           src="https://cdn1.iconfinder.com/data/icons/micon-social-pack/512/twitch-512.png">{{user.name}}
      </p>
      <div class="bio">
        <p>Email: {{user.email}}</p>
        <p>Location: {{user.address.city}}</p>
        <p>Phone: {{user.phone}}</p>
        <p>Website: {{user.website}}</p>
      </div>
      <div class="follow">
        <router-link :to="`/posts/user/${user.id}`">
          <Button text="Show Posts" color="green"/>
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>
import Button from "./Botton";
export default {
  name: 'User',
  components: {Button},
  props: {
    user: Object
  }
}
</script>

<style scoped>
  * {
    font-family: sans-serif;
    padding: 0px;
    margin: 0px;
  }

  body {
    background-color: #212121;
  }



  .container {
    background-color: #ECEFF1;
    width: 100%;
    height: 90%;
    max-height: 300px;
    justify-self: center;
    position: relative;
    transition: 100ms;
  }

  .follow:hover, .icon:hover, .profile-img:hover {
    cursor: pointer;
  }

  .profile-img {
    position: relative;
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
    z-index: 3;
    margin: 10px;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.3);
  }

  .background-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 40%;
    object-fit: cover;
    z-index: 0;
  }

  .name {
    font-size: 22px;
    position: absolute;
    right: 20px;
    top: 50%;
  }

  .bio {
    margin: 15px;
    margin-top: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .icon {
    width: 19px;
    position: absolute;
    margin-left: -28px;
    margin-top: 3px;
  }

  .follow {
    width: auto;
    z-index: 3;
    position: absolute;
    right: 0;
    margin: 10px;
  }
</style>
