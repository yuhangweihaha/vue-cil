import Vue from 'vue'
import Router from 'vue-router'
import { getToken } from '@/utils/auth' // getToken from cookie
const _import = require('./_import_' + process.env.NODE_ENV)
Vue.use(Router)
const appRouter = [{
		path: '/login',
		name: 'login',
		component: _import('login/login'),
	},
	{
		path: '/home/LoveYiYi',
		redirect: _import('LoveYiYi/LoveYiYi')
	},
	{
		path: '/home',
		name: '/home',
		component: _import('home/home'),
		children: [{
				path: '/LoveYiYi',
				name: 'LoveYiYi',
				component: _import('LoveYiYi/LoveYiYi'),
			},
		]
	},
	{
		path: '/',
		redirect: '/login',
	}
]
const router = new Router({
	// mode: 'history',
	base: '/client/',
	redirect: {
		name: 'home'
	},
	routes: appRouter
})

router.beforeEach(function(to, from, next) { // 路由拦截
	const nextRoute = [
	  // 'LoveYiYi' 接口时候打开的路由守卫
	]; // 在跳转前需要登录的页面的路由
	if(nextRoute.indexOf(to.name) >= 0) {
		if(getToken() == undefined || getToken() == null || getToken() == '') { //未登录
			router.push({
				path: '/login'
			})
		} else {
			next();
		}
		return
	}
	next();
});
export default router
