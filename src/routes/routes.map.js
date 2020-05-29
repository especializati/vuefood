import Home from '@/pages/Home';
import Products from '@/pages/Products';
import Cart from '@/pages/Cart';
import Login from '@/pages/Auth/Login';
import Register from '@/pages/Auth/Register';
import MyOrders from '@/pages/Auth/MyOrders';
import DetailOrder from '@/pages/DetailOrder';

const routes = [
    {
        path: '/',
        component: () => import('@/layouts/DefaultTemplate'),
        children: [
            {
                path: '/pedido/:identify',
                component: DetailOrder,
                name: 'order.detail',
                props: true
            },

            {
                path: '/meus-pedidos',
                component: MyOrders,
                name: 'my.orders'
            },

            {
                path: '/carrinho',
                component: Cart,
                name: 'cart'
            },
        
            {
                path: '/loja/:companyFlag',
                component: Products,
                name: 'products',
                props: true
            },
        
            {
                path: '/',
                component: Home,
                name: 'home'
            },
        ]
    },

    {
        path: '/',
        component: () => import('@/layouts/AuthTemplate'),
        children: [
            {
                path: '/entrar',
                component: Login,
                name: 'login'
            },

            {
                path: '/cadastrar',
                component: Register,
                name: 'register'
            },
        ]
    }
]

export default routes