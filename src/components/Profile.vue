<template>
  <div class="container">


    <div class="user-container" v-if="user">
      <User
        :name="user.name"
        :description="user.description"
        :avatar="user.avatar"
      />
      
        
    </div>

    <form>
     
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" type="text"  />
        </div>
      </div>
    <input class="button is-primary margin-bottom" type="submit" @click.prevent="fakeSubmit" />
    </form>
    <div  class="font-awesome">
      <font-awesome-icon icon="cogs" size="2x" pull="left"/>



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
import User from './User.vue'


export default {
  components: {
    User,
    
  },
   methods: {
    fakeSubmit(){
      
      const url = 'https://lit-stream-88743.herokuapp.com/users/1';
      const data = { "name": "123" };
      const options = {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(data),
        url,
      };

    }
  },
  data() {
    return {
      user: {},
      errors: [],
      name: 'joe',
      description: 'average',
      avatar: 'nothingspecial.jpg'
    }
  },

  created() {

      const url = 'https://lit-stream-88743.herokuapp.com/users/1';
      const data = { "name": "123" };
      const options = {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: data,
        url,
      };
      axios(options);


  var id="1"
  const params = new URLSearchParams();
  params.append('content-type', 'json');
  axios.get('https://lit-stream-88743.herokuapp.com/users/'+id+'.json',params)
    .then(response => {
      // JSON responses are automatically parsed.
      this.user = response.data
      
    })
    .catch(e => {
      alert(e)
      this.errors.push(e)
    })

  }
}
</script>

<style scoped>
.container{

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
}
.user-container {
  width: 60vw;
  height: 300px;
}
.font-awesome{
  left:0;
  size: 29em;
  width:50px;
  height: 50px;
  text-align: left;
}

</style>
