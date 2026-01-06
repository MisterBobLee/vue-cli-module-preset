import createRouter from 'app-plugin/router' // 引入共用 npm 的 router 設定
import store from '@/store'

const isPrdouction = process.env.NODE_ENV === 'production'
const resetPath = isPrdouction ? location.origin + '#/login/' : '/login'
// : 'http://localhost:8080/#/login'
// 當沒有 token 時，會進入到哪一頁
export const pattern = /Page403|Page404|Page500|Login|Menu/ // 那些頁面不需要檢查是否有token，避免無線循環

export const routes = [
  // 靜態 routes
  {
    path: '/login',
    name: 'Login',
    component: () => import('@v/login'),
  },
  {
    path: '/403',
    name: 'Page403',
    component: () => import('app-plugin/pages/errors/Page403.vue'),
  },
  {
    path: '/404',
    name: 'Page404',
    component: () => import('app-plugin/pages/errors/Page404.vue'),
  },
  {
    path: '/500',
    name: 'Page500',
    component: () => import('app-plugin/pages/errors/Page500.vue'),
  },
]

export const registerRouter = async () => {
  try {
    await store.dispatch('app/getUsedThmem')
    const newRoutes = await store.dispatch('menu/generateRoutes')
    const asyncRoutes = [
      ...newRoutes,
      {
        path: '/:catchAll(.*)', // 未匹配頁面導至404
        redirect: '/404',
      },
    ]
    asyncRoutes.forEach((ele) => {
      router.addRoute(ele)
    })
  } catch {
    // interceptor handle
  }
}

const router = createRouter({
  //  創建新 router
  routes,
  resetPath,
  pattern,
  registerRouter,
})

export default router
