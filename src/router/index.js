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
		children: [
		  {
				path: '/bianer',
				name: 'bianer',
				component: _import('LoveYiYi/bianer'),
			},
      // 首页
      {
        path: '/LoveYiYi',
        name: 'LoveYiYi',
        component: _import('LoveYiYi/LoveYiYi'),
      },
      // 关于我
      {
        path: '/AboutMe',
        name: 'AboutMe',
        component: _import('AboutMe/AboutMe'),
      },
      // 我是友情链接
      {
        path: '/FriendshipLinks',
        name: 'FriendshipLinks',
        component: _import('FriendshipLinks/FriendshipLinks'),
      },
      // 我是前端教程
      {
        path: '/Tutorials',
        name: 'Tutorials',
        component: _import('Front-endTutorials/Tutorials'),
      },
      // 留言板{
      {
        path: '/MessageBoard',
        name: 'MessageBoard',
        component: _import('MessageBoard/MessageBoard'),
      },
      // 个人日志
      {
        path: '/PersonalLog',
        name: 'PersonalLog',
        component: _import('PersonalLog/PersonalLog'),
      },
      // 时间轴
      {
        path: '/timeAxis',
        name: 'timeAxis',
        component: _import('timeAxis/timeAxis'),
      },
      // 祎祎相册
      {
        path: '/yiyiAlbum',
        name: 'yiyiAlbum',
        component: _import('yiyiAlbum/yiyiAlbum'),
      },
      // 老于头杂谈
      {
        path: '/ARandomTalk',
        name: 'ARandomTalk',
        component: _import('ARandomTalk/ARandomTalk'),
      },
		]
	},
	{
		path: '/',
		redirect: '/LoveYiYi',
	}
]
const router = new Router({
	// mode: 'history',
	// base: '/client/',
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
