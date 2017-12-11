import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Apple from '@/components/apple'
import Banana from '@/components/banana'
import RedBanana from '@/components/redbanana'
Vue.use(Router)


export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
