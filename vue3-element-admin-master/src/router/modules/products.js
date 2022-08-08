const Layout = () => import('@/layout/index.vue')

export default [
  {
    path: '/products',
    component: Layout,
    redirect: '/products/index',
    name: 'products',
    meta: { title: '商品信息' },
    icon: 'user',
    children: [
      {
        path: 'index',
        name: 'uindex2',
        component: () => import('@/views/products/index.vue')
      }
    ],
  },
]