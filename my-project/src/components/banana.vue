<template>
  <div>
    <h1>{{ msg }}</h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'banana',
  data () {
    return {
      msg: 'i am banana.'
    }
  }
}
</script>