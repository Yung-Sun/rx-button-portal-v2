<template>
  <div>
    <h3>事件 Events</h3>
    <a-table
      :columns="eventsColumns"
      :data-source="eventsData"
      :pagination="false"
      style="background: white"
    />
  </div>
</template>

<script>
export default {
  name: 'EventsTable',
  data() {
    return {
      eventsColumns: [
        {
          title: '事件名',
          dataIndex: 'name',
          width: 120,
        },
        {
          title: '说明',
          dataIndex: 'info',
        },
        {
          title: '回调参数',
          dataIndex: 'callback',
        },
      ],
      eventsData: [
        {
          key: '1',
          name: 'loading',
          info: '按钮进入加载状态时触发（onClick前触发）',
          callback: 'Function',
        },
        {
          key: '2',
          name: 'success',
          info: '进入成功状态时触发',
          callback: 'Function',
        },
        {
          key: '3',
          name: 'fail',
          info: '进入失败状态时触发',
          callback: 'Function',
        },
      ],
    };
  },
};
</script>