<template>
  <div>
    <h1>{{ msg }}</h1>
   <!--  <p>{{$route.params.color}}</p>
    <button @click="getParams">getParams</button>--> 
    
    <button @click="addOne">add one</button>
    <button @click="minuOne">minus one</button>
  </div>
</template>

<script>
export default {
  name: 'applePage',
  data () {
    return {
      price:5,
      msg: 'i am apple.'
    }
  },
  methods:{
  	getParams(){
  		console.log(this.$route.params);
  	},
    addOne(){
/*      this.$store.commit('increment',this.price);*/
        this.$store.dispatch('increase',this.price);  //可以异步操作，与后端接口
    },
    minuOne(){
      this.$store.commit('decrement',this.price);  //必须是同步操作
    }
  }
}
</script>