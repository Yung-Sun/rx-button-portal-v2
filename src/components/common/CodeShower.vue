<template>
  <div class="container" :class="{isHide}">
    <header>
      <a-tooltip>
        <template #title>{{ isHide ? '展开代码' : '收起代码' }}</template>
        <div class="toggle button" :class="{isHide}" @click="isHide = !isHide">
          <a-icon type="right" theme="outlined"/>
        </div>
      </a-tooltip>
      <a-tooltip>
        <template #title>复制代码</template>
        <div class="copy button" @click="handleCopy" :data-clipboard-text="content">
          <a-icon type="copy" theme="outlined"/>
        </div>
      </a-tooltip>
    </header>

    <main class="codeWrapper" v-highlight>
      <pre><code :class="type">{{ content }}</code></pre>
    </main>
  </div>
</template>

<script>
import Clipboard from 'clipboard';

export default {
  props:{
    content:{
      type: String,
      required: true
    },
    type:{
      default: 'javascript',
      type: String
    }
  },
  data() {
    return {
      activeKey: ['1'],
      isHide: false
    }
  },
  methods: {
    handleCopy() {
      let clipboard = new Clipboard('.copy')
      clipboard.on('success', () => {
        this.$message.success('复制到剪贴板了哇')
        clipboard.destroy()
      })
      clipboard.on('error', () => {
        this.$message.error('Sorry喔，当前浏览器不支持自动复制哇')
        clipboard.destroy()
      })
    },
  }
}
</script>

<style scoped lang="scss">
.container {
  overflow: hidden;
  max-height: 100%;
  max-width: 900px;
  transition: max-height .6s ease-in-out;
  border-radius: 10px;
  box-shadow: 0 0 14px rgba(0, 0, 0, 0.08);

  &.isHide {
    max-height: 36px;
    transition: max-height .4s ease-in-out;
  }
}

.container > header {
  height: 36px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  color: #222222;
  justify-content: space-between;

  %button {
    padding: 8px;
    width: 28px;
    height: 28px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    cursor: pointer;
    color: rgba(34, 34, 34, 0.5);
  }

  .copy {
    @extend %button;
    transition: color 0.3s linear;

    &:hover {
      color: #222222;
      transition: color 0.3s linear;
    }
  }

  .toggle {
    @extend %button;
    transform: rotate(90deg);
    transition: transform 0.3s;

    &:hover {
      color: #222222;
      transition: all 0.3s linear;
    }

    &.isHide {
      transform: rotate(0);
      transition: all .3s linear;
    }
  }
}

.container > main.codeWrapper {
  pre {
    border-radius: 0 0 10px 10px;
    margin-bottom: 0;
  }
}
</style>