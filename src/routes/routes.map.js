import Home from '@/pages/Home';
import Products from '@/pages/Products';
import Cart from '@/pages/Cart';
import Login from '@/pages/Auth/Login';
import Register from '@/pages/Auth/Register';
import MyOrders from '@/pages/Auth/MyOrders';
import DetailOrder from '@/pages/DetailOrder';
import LoadTableCompany from '@/pages/LoadTableCompany';
import PageNotFound from '@/pages/PageNotFound';

const routes = [
    {
        path: '/',
        component: () => import('@/layouts/DefaultTemplate'),
        children: [
            {
                path: '/:token_company/:token_table',
                component: LoadTableCompany,
                name: 'load.table.company',
                props: true
            },

            {
                path: '/pedido/:identify',
                component: DetailOrder,
                name: 'order.detail',
                props: true,
                meta: {
                    title: 'Detalhes do pedido'
                }
            },

            {
                path: '/meus-pedidos',
                component: MyOrders,
                name: 'my.orders',
                meta: {
                    title: 'Meus Pedidos'
                }
            },

            {
                path: '/carrinho',
                component: Cart,
                name: 'cart',
                meta: {
                    title: 'Carrinho de Compras'
                }
            },
        
            {
                path: '/loja/:companyFlag',
                component: Products,
                name: 'products',
                props: true,
                meta: {
                    title: 'Produtos'
                }
            },
        
            {
                path: '/',
                component: Home,
                name: 'home',
                meta: {
                    title: 'Home VueFood'
                }
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
                name: 'login',
                meta: {
                    title: 'Login - VueFood'
                }
            },

            {
                path: '/cadastrar',
                component: Register,
                name: 'register',
                meta: {
                    title: 'Cadastrar-se VueFood'
                }
            },
        ]
    },

    {
        path: '*',
        component: PageNotFound,
        meta: {
            title: 'Página não encontrada'
        }
    }
]

export default routes