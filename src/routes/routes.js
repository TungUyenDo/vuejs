/* eslint-disable no-unused-vars */
import Vue from "vue";
import VueRouter from "vue-router";
import todoList from '../components/main/todo/todo-list';
import about from '../components/main/about';
import home from '../components/main/home';

Vue.use(VueRouter);
export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/todo',
            name: 'todo',
            component: todoList
        },
        {
            path: '/about',
            name: 'about',
            component: about
        },

    ]
})

// let router =  [
//         {
//             path: '/todo',
//             name: 'todo',
//             component: todoList
//         },
//         {
//             path: '/about',
//             name: 'about',
//             component: about
//         }
        
//     ]
// export default new VueRouter({ router });