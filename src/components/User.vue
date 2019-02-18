<template>
  <div class="container">
    <img class="user-image" :src="avatar"/>
    <div class="user-text">
      <h1>{{ name }}</h1>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'User',
  props: {
    name: String,
    description: String,
    avatar: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container{

  background-color: #ccc;
  
  border-radius: 5px;
  height: 100%;
  
}
.user-text{
  text-align:right;
  margin:0;
  margin-left:-20px;
}
.user-image{
  max-height: 80%;
  max-width: 40%;
  object-fit: cover;
  margin: 10px;
  margin-right:0;
  border-radius: 3px;
}
h1,p {
  margin-right: 10px;
  margin-left: -40px;
}

</style>
