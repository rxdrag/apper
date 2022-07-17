import { GlobalRegistry } from '@designable/core'

GlobalRegistry.registerDesignerLocales({
  'zh-CN': {
    Confirm: "确定",
    Cancel: "取消",
    sources: {
      Inputs: '输入控件',
      Layouts: '布局组件',
      Arrays: '自增组件',
      Displays: '展示组件',
      Pages: '页面管理'
    },
    materials: {
      ModuleList: "物料管理",
      Add: "添加",
      Cuszomized: "自定义上传",
      ComponentTypeName: "组件类型名称",
      OperationType:"操作类型",
      UploadFile:"上传文件",
      UploadHint1:"将文件拖拽到此处，或",
      UploadHint2:"点击上传",
      RequiredName:"请输入组件类型名称",
      RequiredUrl:"请输入调试地址"
    },
  },
  'en-US': {
    sources: {
      Inputs: 'Inputs',
      Layouts: 'Layouts',
      Arrays: 'Arrays',
      Displays: 'Displays',
      Pages: 'Pages'
    },
  },
  'ko-KR': {
    sources: {
      Inputs: '입력',
      Layouts: '레이아웃',
      Arrays: '배열',
      Displays: '디스플레이',
    },
  },
})
