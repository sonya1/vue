<template>
  <div id="app">
    <img src="./assets/logo.png">
    {{totalPrice}}
   <!--  <router-view/>
   
      <router-link to="/apple" tag="li">to apple</router-link><br>
   <router-link :to="{name:'applePage'}" tag="li">to apple</router-link><br>
   <router-link :to="{path:'banana'}">to banana</router-link><br>
   <router-link :to="{path:'banana/red'}">to banana red</router-link><br> -->
   <apple></apple>
   <banana></banana>
  </div>
</template>

<script>
import Apple from './components/apple'
import Banana from './components/banana'
export default {
  components:{Apple,Banana},
  computed:{
    totalPrice(){
/*      return this.$store.state.totalPrice;*/
        return this.$store.getters.getTotal;
    } 
  },
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
