import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
//引入通用全局样式
import './assets/style/global.scss'
import './assets/style/variable.scss'

Vue.config.productionTip = false
Vue.use(Antd);

import { Icon } from 'ant-design-vue';

const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_3149079_jtsyrx9tfea.js',
});
Vue.component('IconFont', IconFont)

import hl from 'highlight.js' // 导入代码高亮文件
import 'highlight.js/styles/atom-one-dark.css' // 导入代码高亮样式
Vue.directive('highlight', function (el) {
    const blocks = el.querySelectorAll('pre code')
    blocks.forEach((block) => {
        hl.highlightBlock(block)
    })
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
