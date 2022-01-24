<template>
  <div>
    <h3>属性 Attributes</h3>
    <a-table
      :columns="attributesColumns"
      :data-source="attributesData"
      :pagination="false"
      style="background: white"
    />
  </div>
</template>

<script>
export default {
  name: 'AttributesTable',
  data() {
    return {
      attributesColumns: [
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
      attributesData: [
        {
          key: '1',
          name: 'onClick',
          info: '点击按钮触发的事件，需要返回布尔值或者Promise对象',
          type: '( ) => Promise | boolean',
          defaultValue: '-',
        },
        {
          key: '2',
          name: 'colors',
          info: '定义 Success 状态时的彩片颜色，颜色支持 HEX / RGBA 格式，数组内至少有一组颜色，彩片两面的颜色不同，因此需要 front, back 两项\n',
          type: 'Object[ ]',
          defaultValue: `[
            {front: '#7b5cff', back: '#6245e0'},
            {front: '#f9ff0c', back: '#ffc507'},
            {front: '#5c86ff', back: '#345dd1'}
          ]`,
        },
        {
          key: '3',
          name: 'successText',
          info: '成功状态时的按钮文案',
          type: 'String',
          defaultValue: "'Success'",
        },
        {
          key: '4',
          name: 'failText',
          info: '失败状态时的按钮文案',
          type: 'String',
          defaultValue: "'Fail'",
        },
      ],
    };
  },
};
</script>