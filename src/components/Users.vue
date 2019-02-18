<template>
  <div>
    <div v-if="users && users.length">
      <div stu v-for="user of users">
      <Profile
        :name="user.name"
        :description="user.description"
        :avatar="user.avatar"
        
      />
      
        
      </div>
    </div>

    <div v-if="errors && errors.length">
      <div v-for="error of errors">
        {{error.message}}
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Profile from './Profile.vue'


export default {
  components: {
    Profile,
    
  },
  data() {
    return {
      users: [],
      errors: []
    }
  },

  created() {
  const params = new URLSearchParams();
  params.append('content-type', 'json');
  axios.get('https://lit-stream-88743.herokuapp.com/users.json',params)
    .then(response => {
      // JSON responses are automatically parsed.
      this.users = response.data
      
    })
    .catch(e => {
      alert(e)
      this.errors.push(e)
    })

  }
}
</script>