const Layout = () => import('@/layout/index.vue')

export default [
  {
    path: '/orders',
    component: Layout,
    redirect: '/orders/index',
    name: 'orders',
    meta: { title: '订单信息' },
    icon: 'user',
    children: [
      {
        path: 'index',
        name: 'uindex1',
        component: () => import('@/views/orders/index.vue')
      }
    ],
  },
]