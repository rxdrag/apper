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

const App = () => {

  /*
  Promise.all(
  Array.from({ length: 10 }).map((_, index) =>
    import(`/modules/module-${index}.js`)
  )import { haha } from './../../../plugins/first/src/index';

).then((modules) => modules.forEach((module) => module.load()));
*/


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


