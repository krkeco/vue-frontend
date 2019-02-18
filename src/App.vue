<template>
  <div id="app">

    <router-link to="/">
      <button class="button">
        Users
      </button>
    </router-link>

    <router-link :to="{ name: 'Profile'}">
      <button class="button">
        Profile
      </button>
    </router-link>
    
    <router-view/>
  </div>
</template>

<script>

function myFunction() {
  var x = document.getElementById("profileButton");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: right;
  color: #2c3e50;
}
.button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px;
}
</style>
