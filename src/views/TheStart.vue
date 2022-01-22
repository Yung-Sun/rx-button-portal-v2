<template>
  <div class="theStart">
    <div>
      <p>RX-Button作为组件使用非常简单，只需要
        <router-link to="/install">安装</router-link>
        然后在项目中引入，即可轻松使用。
      </p>
      <section>
        <h2>全局引入</h2>
        <pre v-highlight><code class="Javascript" style="border-radius: 10px;">{{ globalImport }}</code></pre>
        <h2>局部引入</h2>
        <pre v-highlight><code class="Javascript" style="border-radius: 10px;">{{ componentImport }}</code></pre>
      </section>
      <footer>
        <router-link to="/install">
          <a-icon type="left"/>
          安装说明
        </router-link>
        <router-link to="/guide">使用指南
          <a-icon type="right"/>
        </router-link>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheStart",
  data() {
    return {
      globalImport: `  // main.js
  import Vue from 'vue'
  import App from './App.vue'

  import RXButton from 'rx-button'
  Vue.component('rx-button', RXButton)

  new Vue({
    render: h => h(App)
  }).$mount('#app')`,
      componentImport: `  // xxx.vue 某个组件
  import RXButton from 'rx-button'

  export default {
    components:{ 'rx-button': RXButton }
  }`
    }
  }
}
</script>

<style scoped lang="scss">
.theStart {
  height: 100%;
}

footer {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  margin-top: 50px;

  > span {
    cursor: pointer;
  }
}
</style>