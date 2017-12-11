import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import HelloWorld from '@/components/HelloWorld'
import Apple from '@/components/apple'
import Banana from '@/components/banana'
import RedBanana from '@/components/redbanana'
Vue.use(Router)
vue.use(Vuex);

let store = new Vuex.Store({
	state:{
		totalPrice:0
	},
	mutations:{
		increment(state,price){
			state.totalPrice += price;
		},
		decrement(state,price){
			state.totalPrice -=price;
		}
	}
});

let router = new Router({
  mode:"history",
  routes: [
  	{
  		path:'/',
  		redirect:'/apple'
  	},
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path:'/apple',
    	name:"applePage",
    	component:Apple
    },
    {
    	path:'/apple/:color',
    	component:Apple
    },
    {
    	path:'/banana',
    	component:Banana,
    	children:[
	    	{
	    		path:'red',
	    		component:RedBanana
	    	}
    	]
    }
  ]
})


export default [store,router]