<template>
  <div class="theInstall">
    <div>
      <p>建议使用 npm 或者 yarn 工具进行开发，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。</p>
      <section>
        <h2>使用 yarn 安装</h2>
        <pre v-highlight><code class="Bash" style="border-radius: 10px;">$ yarn add rx-button</code></pre>
        <h2>使用 npm 安装</h2>
        <pre v-highlight><code class="bash" style="border-radius: 10px;">$ npm install rx-button --save</code></pre>
        <h2>使用 cnpm 安装</h2>
        <pre v-highlight><code class="bash" style="border-radius: 10px;">$ cnpm install rx-button --save</code></pre>
      </section>
      <section>
        <h2>网络缓慢</h2>
        <p>关于网速较慢下载吃力的小建议</p>
        <ol>
          <li>
            <p>使用以下命令更换淘宝源</p>
            <pre v-highlight><code class="Bash" style="border-radius: 10px;">$ npm config set registry https://registry.npm.taobao.org</code></pre>
          </li>
          <li>
            <p>使用 <a href="https://github.com/cnpm/cnpm">cnpm</a> 安装依赖</p>
            <pre v-highlight><code class="Bash" style="border-radius: 10px;">$ npm install cnpm -g --registry=https://registry.npmmirror.com</code></pre>
          </li>
          <li>
            <p style="text-decoration:line-through;">氪金升级网速</p>
          </li>
        </ol>
      </section>
      <footer>
        <router-link to="/start">快速上手 <a-icon type="right"/></router-link>
      </footer>
    </div>
  </div>
</template>

<script>

export default {
  name: "TheInstall",
}
</script>

<style scoped lang="scss">
.theInstall {
  height: 100%;
}

footer {
  text-align: right;
  padding: 20px 0;
  margin-top: 50px;
  >span{
    cursor: pointer;
  }
}
</style>