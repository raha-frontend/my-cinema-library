import { createApp } from 'vue'
import Qui from '@qvant/qui-max'
import '@qvant/qui-max/styles'

import router from './router'

import AppComponent from './App.vue'

import components from './components/UI'
console.log(components); 

const app = createApp(AppComponent)

components.forEach(component => {
	app.component(component.name, component)
})

app.use(router)
app.use(Qui)

app.mount('#app')
