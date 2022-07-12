export const Locales: any & { 
  HeaderExtra: any, 
  HeaderContent: any,
  Content: any,
  TabPanel: any,
 } = {
  'zh-CN': {
    title: '页面容器',
    addExtra: '添加页头扩展',
    addHeaderContent: '添加页头内容',
    addPanel: '添加选项卡',
    addIndex: '添加索引',
    addOperation: '添加操作',
    settings: {
      'x-component-props': {
        type: '类型',
        title: '标题',
        extra: '右侧扩展',
        cardTypes: { title: "卡片类型", dataSource: ['内置', '默认'] }
      },
    },
  },
  'en-US': {
    title: 'Page Container',
    settings: {
      'x-component-props': {
        type: 'Type',
        title: 'Title',
        extra: 'HeaderExtra',
        cardTypes: [
          { label: 'Inner', value: 'inner' },
          { label: 'Default', value: '' },
        ],
      },
    },
  },
  'ko-KR': {
    title: '카드',
    settings: {
      'x-component-props': {
        type: '타입',
        title: '제목',
        extra: '추가 항목',
        cardTypes: [
          { label: '안쪽', value: 'inner' },
          { label: '기본', value: '' },
        ],
      },
    },
  },
}
