<!--suppress HtmlUnknownTag -->
<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider id="app-layout-side" v-model:collapsed="collapsed" :collapsible="true">
      <div class="logo" title="RX-Btn暂时还没有logo😅，放个临时工在这">
        <span>🦴</span>
      </div>
      <a-menu theme="dark" v-model:selectedKeys="selectedKeys" mode="inline">
        <a-menu-item :key="item.key" v-for="item in menuItemList" @click="handleJump(item.routeName)">
          <icon-font :type="item.icon"/>
          <span>{{ item.name }}</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0 20px">
        <h1>{{ pageTitle }}</h1>
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <router-view/>
      </a-layout-content>
      <a-layout-footer style="text-align: center;color: #aaaaaa;">
        RX-Button ©2022 created by Yung Sun
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>

export default {
  name: 'rx-button-portal-v2',
  watch:{
    $route:{
      handler(value){
        let currentMenuItem = this.menuItemList.filter(item => item.routeName === value.name)[0]
        this.selectedKeys = [currentMenuItem.key]
      },
      deep: true
    }
  },
  data() {
    return {
      collapsed: true,
      selectedKeys: ['1'],
      menuItemList: [
        {
          name: '安装说明',
          key: '1',
          icon: 'icon-cloud-download',
          routeName: 'install'
        },
        {
          name: '快速上手',
          key: '2',
          icon: 'icon-desktop',
          routeName: 'start'
        },
        {
          name: '使用指南',
          key: '3',
          icon: 'icon-book',
          routeName: 'guide'
        },
        {
          name: '原理简介',
          key: '4',
          icon: 'icon-bulb',
          routeName: 'principle'
        }
      ]
    }
  },
  computed:{
    pageTitle(){
      let currentMenuItem = this.menuItemList.filter(item => item.key === this.selectedKeys[0])[0]
      return currentMenuItem.name
    }
  },
  methods:{
    handleJump(routeName){
      this.$router.push({name: routeName})
    }
  }
}
</script>

<style scoped lang="scss">
#app-layout-side .logo {
  margin: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  > span {
    color: white;
    cursor: pointer;
    padding: 10px 12px;
    border-radius: 100px;
    transition: all .4s;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      transition: all .4s;
    }
  }
}

.ant-layout-header {
  box-shadow: 0 0 14px rgba(0, 0, 0, 0.02);

  h1 {
    font-weight: bold;
    font-size: 16px;
  }
}

.ant-layout-footer {
  transition: all 5s;
  cursor: default;

  &:hover {
    box-shadow: 0 0 14px rgba(0, 0, 0, 0.08);
    transition: all 0.6s;
  }
}
</style>