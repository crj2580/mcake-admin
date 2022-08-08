const Layout = () => import('@/layout/index.vue')

export default [
  {
    path: '/statistic',
    component: Layout,
    redirect: '/statistic/index',
    name: 'statistic',
    meta: { title: '数据统计' },
    icon: 'user',
    children: [
      {
        path: 'index',
        name: 'uindex3',
        component: () => import('@/views/statistic/index.vue')
      }
    ],
  },
]