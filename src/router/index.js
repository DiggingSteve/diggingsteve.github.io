import App from '../app'
const home = r => require.ensure([], () => r(require('../components/page/home')), 'home');
const about = r => require.ensure([], () => r(require('../components/page/about')), 'about');
export default [{
    path: '',
    component: home, //顶层路由，对应index.html
    children: [ //二级路由。对应home.vue
    
    ]
},
 {
    path: '/home',
    component: home
},
{
    path: '/about',
    component: about
}

]