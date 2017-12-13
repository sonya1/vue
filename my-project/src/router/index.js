import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import HelloWorld from '@/components/HelloWorld'
import Apple from '@/components/apple'
import Banana from '@/components/banana'
import RedBanana from '@/components/redbanana'

Vue.use(Router)
Vue.use(Vuex);

let store = new Vuex.Store({
	state:{
		totalPrice:0
	},
	getters:{
		getTotal(state){
			return state.totalPrice;
		}
	},
	mutations:{  //必须是同步操作
		increment(state,price){
			state.totalPrice += price;
		},
		decrement(state,price){
			state.totalPrice -=price;
		}
	},
	actions:{  //可以异步操作
		increase(context,price){
			context.commit('increment',price);
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
});


export {router,store};
//export router;