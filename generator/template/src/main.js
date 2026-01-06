import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'

// 使用繁體中文語言包
import locale from 'element-plus/dist/locale/zh-tw.mjs'

import router from './router'
import store from './store'

import 'app-plugin/assets/fonts/icomoon/style.css'
import 'app-plugin/assets/fonts/el-icon/style.css'
import '@css/style.sass'

const app = createApp(App)

// 引入 element-plus 的 icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

import pluginInstall from 'app-plugin/components/install'

app
  .use(router)
  .use(store)
  .use(pluginInstall)
  .use(ElementPlus, { locale })
  .mount('#app')
