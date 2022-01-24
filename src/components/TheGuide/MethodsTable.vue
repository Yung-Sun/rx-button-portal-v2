<template>
  <div>
    <h3>方法 Methods</h3>
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
  name: 'MethodsTable',
  data() {
    return {
      methodsColumns: [
        {
          title: '方法名',
          dataIndex: 'name',
          width: 120,
        },
        {
          title: '说明',
          dataIndex: 'info',
        },
        {
          title: '参数',
          dataIndex: 'callback',
        },
      ],
      methodsData: [
        {
          key: '1',
          name: 'resetButton',
          info: '重置按钮状态，使其恢复回submit状态',
          callback: 'Function',
        },
        {
          key: '2',
          name: 'changeButtonState',
          info: '手动切换按钮状态',
          callback: "Function ( stateName: 'submit' | 'success' | 'fail' )",
        },
      ],
    };
  },
};
</script>