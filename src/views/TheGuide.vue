<template>
  <div class="theGuide">
    <div>
      <section>
        <p class="buttonGroup">
          <rx-button
            class="rx-button"
            ref="rx-success-btn"
            :on-click="handleClickSuccess"
          />
          <rx-button
            class="rx-button"
            ref="rx-fail-btn"
            :on-click="handleClickFail"
          />
          <span class="reloadButton" @click="handleReset"
            ><a-icon type="reload"
          /></span>
        </p>
        <p>
          rx-button
          本身是一个附带状态的按钮，普通按钮仅仅只做点击，即时触发一个事件，不必关心事件的结果。而
          rx-button 包含了submit、loading、finish（success /
          fail）三种状态，因此需要用户返回点击事件的结果，以判断 finish
          的结果。推荐应用在表单上传、获取请求等异步场景。
        </p>
      </section>
      <section>
        <h2>API</h2>
        <div class="tableArea">
          <AttributesTable />
          <EventsTable />
          <MethodsTable />
          <SlotTable />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import AttributesTable from '@/components/TheGuide/AttributesTable.vue';
import EventsTable from '@/components/TheGuide/EventsTable.vue';
import MethodsTable from '@/components/TheGuide/MethodsTable.vue';
import SlotTable from '@/components/TheGuide/SlotTable.vue';

export default {
  name: 'TheGuide',
  components: { AttributesTable, EventsTable, MethodsTable, SlotTable },

  methods: {
    handleClickSuccess() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 2000);
      });
    },
    handleClickFail() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject();
        }, 2000);
      });
    },
    handleReset() {
      this.$refs['rx-success-btn'].resetButton();
      this.$refs['rx-fail-btn'].resetButton();
    },
  },
};
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
.tableArea {
  > div {
    margin-bottom: 40px;
  }
}
</style>