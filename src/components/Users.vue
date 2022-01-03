<template>
  <div :key="user.id" v-for="user in users">
    <User :user="user"/>
  </div>
</template>

<script>
  import User from "./User";
  import axios from 'axios';

  export default {
    name: 'Users',
    components: {
      User
    },
    data() {
      return {
        users: []
      }
    },
    async created() {
      const userReq = await axios.get('https://ebe638107h.execute-api.eu-central-1.amazonaws.com/prod/users');
      this.users = userReq.data;
    }
  }
</script>
