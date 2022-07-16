import 'antd/dist/antd.less'
import React, { useMemo } from 'react'
import ReactDOM from 'react-dom'
import {
  Designer,
  DesignerToolsWidget,
  ViewToolsWidget,
  Workspace,
  OutlineTreeWidget,
  HistoryWidget,
  StudioPanel,
  WorkspacePanel,
  ToolbarPanel,
  ViewportPanel,
  SettingsPanel,
  ComponentTreeWidget,
} from '@designable/react'
import {
  SettingsForm,
  setNpmCDNRegistry,
} from '@designable/react-settings-form'
import {
  createDesigner,
  Shortcut,
  KeyCode,
} from '@designable/core'
import {
  NavigationWidget,
  ActionsWidget,
  PreviewWidget,
  SchemaEditorWidget,
} from './widgets'
import { saveSchema } from './service'
import {
  Form,
  Field,
} from '@designable/formily-antd'
import { CompositePanel } from './panels/CompositePanel'
import { ViewPanel } from './panels/ViewPanel'
import { MaterialPanel } from './material/MaterialPanel'
import { convertMaterialsToComponents } from './material/model'
import { allMaterials } from './material/mock'
import "./locales"
setNpmCDNRegistry('//unpkg.com')

/**
 * 动态加载js文件
 * @param {*} src
 * @param {*} callback
 *   loadScript("",function(){
 *   console.log("加载成功")
 * })
 * var that = this; 在方法里面使用that
 */
function loadJS(
  src: string,
  callback: (this: HTMLScriptElement, ev: Event) => void,
  isCache = false
): void {
  const script = document.createElement("script");
  script.type = "text/JavaScript";
  if (isCache) {
    script.src = src + "?t=" + new Date().getTime();
  } else {
    script.src = src;
  }
  if (script.addEventListener) {
    script.addEventListener("load", callback);
    script.addEventListener("error",(e)=>{
      console.error("哈哈", e)
    });
  }

  document.head.appendChild(script);
}

declare function haha():void;

const App = () => {

  /*
  Promise.all(
  Array.from({ length: 10 }).map((_, index) =>
    import(`/modules/module-${index}.js`)
  )import { haha } from './../../../plugins/first/src/index';

).then((modules) => modules.forEach((module) => module.load()));
*/
  let modulePath = "http://127.0.0.1:4000/index.js";
  loadJS("http://localhost:4000/vendors~index.js", ()=>{
    loadJS(modulePath, ()=>{
      console.log("加载的回调3")
      //console.log(window.haha)
      //window.haha()
    }, true)
  })

  const engine = useMemo(
    () =>
      createDesigner({
        shortcuts: [
          new Shortcut({
            codes: [
              [KeyCode.Meta, KeyCode.S],
              [KeyCode.Control, KeyCode.S],
            ],
            handler(ctx) {
              console.log("哈哈", ctx)
              saveSchema(ctx.engine)
            },
          }),
        ],
        rootComponentName: 'Form',
      }),
    []
  )
  return (
    <Designer engine={engine}>
      <StudioPanel logo={<NavigationWidget />} actions={<ActionsWidget />}>
        <CompositePanel>
          <CompositePanel.Item
            title="panels.Component"
            icon="Component"
          >
            <MaterialPanel />
          </CompositePanel.Item>
          <CompositePanel.Item title="panels.OutlinedTree" icon="Outline">
            <OutlineTreeWidget />
          </CompositePanel.Item>
          <CompositePanel.Item title="panels.History" icon="History">
            <div style={{ overflow: "auto", height: "100%" }}>
              <HistoryWidget />
            </div>
          </CompositePanel.Item>
        </CompositePanel>
        <Workspace id="form">
          <WorkspacePanel>
            <ToolbarPanel>
              <DesignerToolsWidget />
              <ViewToolsWidget
                use={['DESIGNABLE', 'JSONTREE', 'PREVIEW']}
              />
            </ToolbarPanel>
            <ViewportPanel style={{ height: '100%' }}>
              <ViewPanel type="DESIGNABLE">
                {() => (
                  <ComponentTreeWidget
                    components={{
                      Form,
                      Field,
                      ...convertMaterialsToComponents(allMaterials)
                    }}
                  />
                )}
              </ViewPanel>
              <ViewPanel type="JSONTREE" scrollable={false}>
                {(tree, onChange) => (
                  <SchemaEditorWidget tree={tree} onChange={onChange} />
                )}
              </ViewPanel>
              <ViewPanel type="PREVIEW">
                {(tree) => <PreviewWidget tree={tree} />}
              </ViewPanel>
            </ViewportPanel>
          </WorkspacePanel>
        </Workspace>
        <SettingsPanel title="panels.PropertySettings">
          <SettingsForm uploadAction="https://www.mocky.io/v2/5cc8019d300000980a055e76" />
        </SettingsPanel>
      </StudioPanel>
    </Designer>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))


