import { createRouter, createWebHistory } from 'vue-router'

import HomePage from './pages/HomePage.vue'
import CartPage from './pages/CartPage.vue'
import AddPage from './pages/AddPage.vue'
import SignIn from './pages/SignIn/index.vue'
import Profile from './pages/Profile.vue'
import PostForm from './components/PostForm.vue'
import PostList from './components/PostList.vue'

const routes = [
  {
		path: '/',
		component: HomePage
	},

	{
		path: '/cart',
		component: CartPage
	},

	{
		path: '/profile',
		component: Profile
	},

	{
		path: '/add',
		component: AddPage
	},

	{
		path: '/signin',
		component: SignIn
	},

	{
		path: '/form',
		component: PostForm
	},
	
	{
		path: '/list',
		component: PostList
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router