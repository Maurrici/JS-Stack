import * as VueRouter from 'vue-router';
import HomePage from '../components/home/HomePage.vue';
import AboutPage from '../components/about/AboutPage.vue';

const routes = [
    {
        name: "Home",
        path: "/",
        component: HomePage
    },
    {
        name: "About",
        path: "/about/:user",
        component: AboutPage
    }
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

export default router;
