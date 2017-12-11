<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>{{$route.params.color}}</p>
    <button @click="getParams">getParams</button>
  </div>
</template>

<script>
export default {
  name: 'applePage',
  data () {
    return {
      msg: 'i am apple.'
    }
  },
  methods:{
  	getParams(){
  		console.log(this.$route.params);
  	}
  }
}
</script>