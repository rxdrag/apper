import { Tabs } from "antd"
import React, { memo, useEffect, useState } from "react"
import { MaterialSearchWidget } from "./MaterialSearchWidget";
import "./index.less"
import { MaterialModal } from "./MaterialModal";
import { MaterialModule } from "./model";
import { observer } from "@formily/reactive-react";
import { materialStore } from "./global";
import {
  Input,
  Select,
  TreeSelect,
  Cascader,
  Radio,
  Checkbox,
  Slider,
  Rate,
  NumberPicker,
  Transfer,
  Password,
  DatePicker,
  TimePicker,
  Upload,
  Switch,
  Text,
  Card,
  ArrayCards,
  ObjectContainer,
  ArrayTable,
  Space,
  FormTab,
  FormCollapse,
  FormLayout,
  FormGrid,
} from '@designable/formily-antd'
import { ResourceWidget } from "../widgets/ResourceWidget";
// import {
//   ResourceWidget
// } from '@designable/react'

const { TabPane } = Tabs;
declare const window: Window & { materilaModules: MaterialModule[] };

export const MaterialPanel: React.FC = observer(() => {

  const onChange = (key: string) => {
    console.log(key);
  };
  return (
    <div className="rx-material-panel">
      <MaterialSearchWidget />
      <Tabs defaultActiveKey="1"
        animated
        size="small"
        className="materail-tabs"
        tabBarExtraContent={
          <MaterialModal />
        }
        onChange={onChange}
      >
        {
          materialStore.modules.map((tabData, index) => {
            return (
              <TabPane tab={tabData.name} key={index + 1}>
                {
                  tabData.groups?.map((groupData, gIndex) => {
                    console.log("大会", groupData.materials.map(material => material.component))
                    return (<ResourceWidget
                      key={gIndex + 1}
                      title={groupData.title}
                      sources={groupData.materials.map(material => material.component)}
                    />)
                  })
                }
                <ResourceWidget
                  title="sources.Layouts"
                  sources={[
                    Card,
                    FormGrid,
                    FormTab,
                    FormLayout,
                    FormCollapse,
                    Space,
                  ]}
                />
              </TabPane>
            )
          })
        }
      </Tabs>
    </div>
  )
})