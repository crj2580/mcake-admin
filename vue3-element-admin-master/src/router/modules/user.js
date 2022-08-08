const Layout = () => import('@/layout/index.vue')

export default [
  {
    path: '/users',
    component: Layout,
    redirect: '/users/index',
    name: 'users',
    meta: { title: '用户信息' },
    icon: 'user',
    children: [
      {
        path: 'index',
        name: 'uindex',
        component: () => import('@/views/users/index.vue')
      }
    ],
  },
]