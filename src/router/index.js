import Vue from 'vue'
import VueRouter from 'vue-router'

// Import components
import Home from '../components/home'
import About from '../components/content/about'
import Add from '../components/content/add'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history', routes: [
        {
            path: '/',
            name: '/',
            component: Home,
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,
        },
        {
            path: '/about',
            name: 'About',
            component: About,
        },
        {
            path: '/add',
            name: 'Add',
            component: Add,
        },
    ]
});

export default router