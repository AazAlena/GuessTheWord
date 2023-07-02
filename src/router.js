import { createRouter, createWebHistory } from 'vue-router'


// Компоненты страниц
import ImageGallary from './views/ImageGallary.vue';

export default createRouter({
    // История переходов сохраняется
    history: createWebHistory(),


    // Роуты и компоненты
    routes: [
        {
            path: '/',
            name: 'ImageGallary',
            component: ImageGallary
        }
    ]
})