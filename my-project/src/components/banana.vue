<template>
  <div>
    <h1>{{ msg }}</h1>

    <button @click="addOne">add one</button>
    <button @click="minuOne">minus one</button>

<!--     <router-view/>
   -->  </div>
</template>

<script>
export default {
  name: 'banana',
  data () {
    return {
      msg: 'i am banana.',
      price:15
    }
  },
  methods:{
    getParams(){
      console.log(this.$route.params);
    },
    addOne(){
      this.$store.commit('increment',this.price);
    },
    minuOne(){
      this.$store.commit('decrement',this.price);
    }
  }
}
</script>