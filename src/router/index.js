
import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'

import { useAuth } from 'src/composables/auth';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */


function passRouteToProps(route){
	return {
		queryParams: route.query,
		fieldName: route.params.fieldName, 
		fieldValue: route.params.fieldValue
	}
}


let routes = [{
	name: 'main',
	path: '/',
	component: () => import('layouts/MainLayout.vue'),
	children: [
		//Dashboard routes


//anamnesepsi routes
		{
			path: '/anamnesepsi/:fieldName?/:fieldValue?',
			name: 'anamnesepsilist',
			component: () => import('pages/anamnesepsi/list.vue'),
			props: route => passRouteToProps(route)
		},
		{ 
			path: '/anamnesepsi/view/:id', 
			name: 'anamnesepsiview', 
			component: () => import('pages/anamnesepsi/view.vue'), 
			props: true 
		},
		{ 
			path: '/anamnesepsi/add', 
			name: 'anamnesepsiadd', 
			component: () => import('pages/anamnesepsi/add.vue'), 
			props: true 
		},
		{ 
			path: '/anamnesepsi/edit/:id', 
			name: 'anamnesepsiedit', 
			component: () => import('pages/anamnesepsi/edit.vue'), 
			props: true 
		},

//municipes routes
		{
			path: '/municipes/:fieldName?/:fieldValue?',
			name: 'municipeslist',
			component: () => import('pages/municipes/list.vue'),
			props: route => passRouteToProps(route)
		},
		{ 
			path: '/municipes/view/:id', 
			name: 'municipesview', 
			component: () => import('pages/municipes/view.vue'), 
			props: true 
		},
		{ 
			path: '/municipes/add', 
			name: 'municipesadd', 
			component: () => import('pages/municipes/add.vue'), 
			props: true 
		},
		{ 
			path: '/municipes/edit/:id', 
			name: 'municipesedit', 
			component: () => import('pages/municipes/edit.vue'), 
			props: true 
		},

//users routes
		{
			path: '/users/:fieldName?/:fieldValue?',
			name: 'userslist',
			component: () => import('pages/users/list.vue'),
			props: route => passRouteToProps(route)
		},
		{ 
			path: '/users/view/:id', 
			name: 'usersview', 
			component: () => import('pages/users/view.vue'), 
			props: true 
		},
		{ 
			path: '/index/register', 
			name: 'usersuserregister', 
			component: () => import('pages/index/userregister.vue'), 
			props: true 
		},
		{ 
			path: '/account/edit', 
			name: 'usersaccountedit', 
			component: () => import('pages/account/accountedit.vue'), 
			props: true 
		},
		{ 
			path: '/account', 
			name: 'usersaccountview', 
			component: () => import('pages/account/accountview.vue'), 
			props: true 
		},
		{ 
			path: '/users/add', 
			name: 'usersadd', 
			component: () => import('pages/users/add.vue'), 
			props: true 
		},
		{ 
			path: '/users/edit/:id', 
			name: 'usersedit', 
			component: () => import('pages/users/edit.vue'), 
			props: true 
		},

//usuarios routes
		{
			path: '/usuarios/:fieldName?/:fieldValue?',
			name: 'usuarioslist',
			component: () => import('pages/usuarios/list.vue'),
			props: route => passRouteToProps(route)
		},
		{ 
			path: '/usuarios/view/:id', 
			name: 'usuariosview', 
			component: () => import('pages/usuarios/view.vue'), 
			props: true 
		},
		{ 
			path: '/usuarios/add', 
			name: 'usuariosadd', 
			component: () => import('pages/usuarios/add.vue'), 
			props: true 
		},
		{ 
			path: '/usuarios/edit/:id', 
			name: 'usuariosedit', 
			component: () => import('pages/usuarios/edit.vue'), 
			props: true 
		},

		
		
//Password reset routes
		{ 
			path: '/index/forgotpassword', 
			name: 'forgotpassword', 
			component: () => import('pages/index/forgotpassword.vue') 
		},
		{ 
			path: '/index/resetpassword', 
			name: 'resetpassword', 
			component: () => import('pages/index/resetpassword.vue') 
		},
		{ 
			path: '/index/resetpassword_completed', 
			name: 'resetpassword_completed', 
			component: () => import('pages/index/resetpassword_completed.vue') 
		},
		
		

		//Error pages
		{ path:  '/error/forbidden', name: 'forbidden',  component: () => import('pages/errors/forbidden.vue') },
		{ path: '/error/notfound',  name: 'notfound', component: () => import('pages/errors/pagenotfound.vue') }
	],
	
	},
	{ path: '/:catchAll(.*)*', component: () => import('pages/errors/pagenotfound.vue') }
];

export default route(async function () {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE == 'history' ? createWebHistory : createWebHashHistory)
	
	const mainRoute = routes.find(x => x.name = "main");
	
	const auth = useAuth();

	
	//get current user data from api on first load
	const { user } = await auth.getUserData();
	if(user){
		const homeRoute = {
			path: '/', 
			alias: '/home', 
			name: 'home', 
			component: () => import('pages/home/home.vue') 
		}
		mainRoute.children.push(homeRoute);
	}
	else{
		const indexRoute = { 
			path: '/',  
			alias: '/home', 
			name: 'index', 
			component: () => import('pages/index/index.vue') 
		}
		mainRoute.children.push(indexRoute);
	}

	const Router = createRouter({
	scrollBehavior(to, from, savedPostion){
		if(savedPostion) return savedPostion;
		return { top:0 }
	},
    routes,
    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE)
  })
  return Router
})

