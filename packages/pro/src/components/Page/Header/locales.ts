export const HeaderLocales = {
  'zh-CN': {
    title: '页头',
    addExtra: '添加扩展',
    addColumn: '添加列',
    addIndex: '添加索引',
    addOperation: '添加操作',
    settings: {
      'x-component-props': {
        type: '类型',
        title: '标题',
        extra: '右侧扩展',
        cardTypes: { title:"卡片类型", dataSource: ['内置', '默认'] }
      },
    },
  },
  'en-US': {
    title: 'Page Header',
    settings: {
      'x-component-props': {
        type: 'Type',
        title: 'Title',
        extra: 'Extra',
        cardTypes: [
          { label: 'Inner', value: 'inner' },
          { label: 'Default', value: '' },
        ],
      },
    },
  },
}
