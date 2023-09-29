import { createRouter, createWebHistory } from 'vue-router'
import MainPage from './../layout/main/Index.vue'
import HomePage from './../pages/Home/Index.vue'
import FavoritePage from './../pages/Favorite/Index.vue'
import PhotoDetailPage from '../pages/Home/PhotoDetailPage.vue'
const routes = [
    {
        path: '',
        redirect: '/home',
        component: MainPage,
        children: [
            { path: 'home', name: 'home', component: HomePage, },
            { path: 'photo/:id', name:'photo', component: PhotoDetailPage },
            { path: 'favorite', name: 'favorite', component: FavoritePage, }
        ]
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;