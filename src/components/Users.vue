/* eslint-disable */
<template>
  <ul v-if="posts && posts.length">
    <li v-for="post of posts">
      <p>Posts<p>
      
    </li>
  </ul>

</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
      errors: []
    }
  },

  created() {
  const params = new URLSearchParams();
  params.append('content-type', 'json');
	//axios.get('http://jsonplaceholder.typicode.com/posts', params)

  axios.get('https://lit-stream-88743.herokuapp.com/users.json',params)
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data
      
    })
    .catch(e => {
      alert(e)
      this.errors.push(e)
    })

  }
}
</script>