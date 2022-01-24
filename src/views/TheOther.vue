<template>
  <div class="theOther">
    <div>
      <h2>相关知识点</h2>
      <ul>
        <li>Canvas 基本用法</li>
        <li>利用 requestAnimationFrame 绘制动画</li>
        <li>SVG 图标绘制及动效制作</li>
        <li>Vue transition 过渡动画</li>
      </ul>
      <h2>特别感谢</h2>
      <p>在此特别感谢组件制作期间，张同事的大力支持。</p>
    </div>
    <footer>
      <router-link to="/guide">
        <a-icon type="left" />
        使用指南
      </router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'TheOther',
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.theOther {
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