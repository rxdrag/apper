import { Button, Tabs } from "antd"
import React from "react"
import { MaterialSearchWidget } from "./MaterialSearchWidget";
import "./index.less"
import {
  ResourceWidget
} from '@designable/react'
import {
  Form,
  Field,
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
import { ToolOutlined } from "@ant-design/icons";
import { allMaterials } from "./data";

const { TabPane } = Tabs;

export const MaterialPanel: React.FC = () => {
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
          <Button shape="circle" style={{ border: 0 }}
            icon={<ToolOutlined style={{ fontSize: 14, transform: "rotateY(180deg)" }} />}
          />
        }
        onChange={onChange}
      >
        {
          allMaterials.map((tabData, index) => {
            return (
              <TabPane tab={tabData.title} key={index + 1}>
                {
                  tabData.groups?.map((groupData, gIndex) => {
                    return (<ResourceWidget
                      key={gIndex + 1}
                      title={groupData.title}
                      sources={groupData.materials.map(material => material.component)}
                    />)
                  })
                }

              </TabPane>
            )
          })
        }
      </Tabs>
    </div>
  )
}