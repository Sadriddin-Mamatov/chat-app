import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Dashboard from './components/Dashboard.vue';
import Settings from './components/Settings.vue';
import Chat from './components/Chat.vue';

const routes: Array<RouteRecordRaw> = [
    { path: '/', component: Dashboard },
    { path: '/chat', component: Chat },
    { path: '/settings', component: Settings },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
