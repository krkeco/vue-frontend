<template>
  <div class="container">


    <div class="user-container" v-if="user">
      <User
        :name="user.name"
        :description="user.description"
        :avatar="user.avatar"
      />
      
        
    </div>
    <div id="settings" class="edit-profile">
      <p>
        <input placeholder="Name"/>
        <button @click="handleClick">Save</button>
        </p>
      <p>
      <input style="margin-top:10px" placeholder="Description"/>
        <button @click="handleClick">Save</button>
      </p>
    </div>

    <div  class="font-awesome" @click="toggleSettings">
      <font-awesome-icon icon="cogs" size="2x" pull="left"/>
    </div>

    <div class="settings" v-if="errors && errors.length">
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
  data() {
    return {

      user: {},
      errors: [],
      name: 'joe',
      description: 'average',
      avatar: 'nothingspecial.jpg'
    }
  },
    methods: {
      handleClick: function() {
        alert('test')
        //Not really sure what I have been doing wrong here, but I have tried patch, put, removing cors on the server, making the application an API instead of applicationcontroller, and just about everything I can think of but for some reason the request is coming off as an option instead of put/patch.  If you know how to fix it I would really like to know!
        axios.patch("https://lit-stream-88743.herokuapp.com/users/1?user[name]=bob&user[description]=friendly&user[avatar]=ping.jpg");
  
    },
    toggleSettings: function() {
        
          var x = document.getElementById("settings");
          if (x.style.display === "none") {
            x.style.display = "block";
          } else {
            x.style.display = "none";
          }
  
    }
  },

  created() {
  var id="1"
  const params = new URLSearchParams();
  params.append('content-type', 'json');
  axios.get('https://lit-stream-88743.herokuapp.com/users/'+id+'.json')
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
.edit-profile{
  display: none;
  
  margin-left: 65vw;
  padding-left: 0;
  left:0;
  position: absolute;
  align-items: left;

  margin-top: 15px;
  
}
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
  right:10px;
  position: absolute;
  size: 29em;
  width:50px;
  height: 50px;
  text-align: left;
}
</style>
