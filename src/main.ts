import { createApp } from 'vue'
import App from './App.vue'
import HomeVue from "./components/index/Home.vue"
import DetailVue from "./components/podcast/Detail.vue"
import * as VueRouter from "vue-router"

const routingConfig = [
    {
        path: "/",
        name: "home",
        component: HomeVue
    },
    {
        path: "/podcast/:pid",
        name: "podcast_detail",
        component: DetailVue
    }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: routingConfig
})

const app = createApp(App)

app.use(router)
app.mount('#app')
