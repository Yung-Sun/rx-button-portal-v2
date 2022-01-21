<template>
  <div class="theInstall">
    <CodeShower :content="content" type="js"/>
  </div>
</template>

<script>
import CodeShower from "@/components/common/CodeShower";

export default {
  name: "TheInstall",
  components: {CodeShower},
  data(){
    return {
      content:`handleCopy() {
  let clipboard = new Clipboard('.copy')
  clipboard.on('success', e => {
    this.$message.success('复制成功');
    clipboard.destroy()
  })
  clipboard.on('error', e => {
    console.log('该浏览器不支持自动复制')
    clipboard.destroy()
  })
}`
    }
  }
}
</script>

<style scoped lang="scss">
.theInstall {
  padding: 20px 10px;
  height: 100%;
}
</style>