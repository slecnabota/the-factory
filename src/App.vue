<template>
  <div id="app">
    <router-view />
    
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a{
  text-decoration: none;
}
body{
  font-family: 'Roboto', sans-serif;
}
$laptop: 1600px;
$tablet: 1024px;
$l-mobile: 768px;
$mobile: 475px;
.container{
  width: 100%;
  max-width: 1520px;
  margin: 0 auto;
  padding: 0 20px;
  @media(max-width: $laptop){
    max-width: 1380px;
  }
}
</style>
