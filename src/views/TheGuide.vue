<template>
  <div class="theGuide">
    <div>
      <section>
        <p class="buttonGroup">
          <rx-button class="rx-button" ref="rx-success-btn" :on-click="handleClickSuccess"/>
          <rx-button class="rx-button" ref="rx-fail-btn" :on-click="handleClickFail"/>
          <span class="reloadButton" @click="handleReset"><a-icon type="reload"/></span>
        </p>
        <p>rx-button 本身是一个附带状态的按钮，普通按钮仅仅只做点击，即时触发一个事件，不必关心事件的结果。而 rx-button 包含了submit、loading、finish（success /
          fail）三种状态，因此需要用户返回点击事件的结果，以判断 finish 的结果。推荐应用在表单上传、获取请求等异步场景。</p>
      </section>
      <section>
        <h2>API</h2>
        <div>
          <h3>属性 Attributes</h3>
          <a-table :columns="attributesColumns" :data-source="attributesData" :pagination="false" style="background: white"/>
        </div>

      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheGuide",
  data(){
    return {
      attributesColumns:[
        {
          title: '属性',
          dataIndex: 'name',
          width: 120,
        },
        {
          title: '说明',
          dataIndex: 'info',
        },
        {
          title: '类型',
          dataIndex: 'type',
        },
        {
          title: '默认值',
          dataIndex: 'defaultValue',
        },
      ],
      attributesData:[
        {
          key:'1',
          name: 'onClick',
          info:'点击按钮触发的事件，需要返回布尔值或者Promise对象',
          type:'( ) => Promise | boolean',
          defaultValue:'-'
        },
        {
          key:'2',
          name: 'colors',
          info:'定义 Success 状态时的彩片颜色，颜色支持 HEX / RGBA 格式，数组内至少有一组颜色，彩片两面的颜色不同，因此需要 front, back 两项\n',
          type:'Object[ ]',
          defaultValue: `[
            {front: '#7b5cff', back: '#6245e0'},
            {front: '#f9ff0c', back: '#ffc507'},
            {front: '#5c86ff', back: '#345dd1'}
          ]`
        },
        {
          key:'3',
          name: 'successText',
          info:'成功状态时的按钮文案',
          type:'String',
          defaultValue:"'Success'"
        },
        {
          key:'4',
          name: 'failText',
          info:'失败状态时的按钮文案',
          type:'String',
          defaultValue:"'Fail'"
        },
      ]
    }
  },
  methods: {
    handleClickSuccess() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, 2000)
      })
    },
    handleClickFail() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject()
        }, 2000)
      })
    },
    handleReset() {
      this.$refs['rx-success-btn'].resetButton()
      this.$refs['rx-fail-btn'].resetButton()
    }
  }
}
</script>

<style scoped lang="scss">
.buttonGroup {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  .reloadButton {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    color: white;
    background: #1f2335;
    border-radius: 100px;
    margin: 0 10px;
    cursor: pointer;
  }

  .rx-button {
    margin: 0 10px;
  }
}
</style>