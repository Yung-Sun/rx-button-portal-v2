<template>
  <div>
    <h3>插槽 Slot</h3>
    <a-table
      :columns="methodsColumns"
      :data-source="methodsData"
      :pagination="false"
      style="background: white"
    />
  </div>
</template>

<script>
export default {
  name: 'SlotTable',
  data() {
    return {
      methodsColumns: [
        {
          title: '插槽名',
          dataIndex: 'name',
          width: 120,
        },
        {
          title: '说明',
          dataIndex: 'info',
        },
      ],
      methodsData: [
        {
          key: '1',
          name: 'default',
          info: '初始状态时的内容',
        },
        {
          key: '2',
          name: 'loading',
          info: '加载状态时的内容',
        },
        {
          key: '3',
          name: 'success',
          info: '成功状态时的内容',
        },
        {
          key: '4',
          name: 'fail',
          info: '失败状态时的内容',
        },
      ],
    };
  },
};
</script>