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
        onChange={onChange}>
        <TabPane tab="表单" key="1">
          <ResourceWidget
            title="sources.Inputs"
            sources={[
              Input,
              Password,
              NumberPicker,
              Rate,
              Slider,
              Select,
              TreeSelect,
              Cascader,
              Transfer,
              Checkbox,
              Radio,
              DatePicker,
              TimePicker,
              Upload,
              Switch,
              ObjectContainer,
            ]}
          />
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
          <ResourceWidget
            title="sources.Arrays"
            sources={[ArrayCards, ArrayTable]}
          />
          <ResourceWidget title="sources.Displays" sources={[Text]} />
        </TabPane>
        <TabPane tab="业务" key="2">
        </TabPane>
        <TabPane tab="模板" key="3">
        </TabPane>
        <TabPane tab="模板2" key="4">
        </TabPane>
        <TabPane tab="模板3" key="5">
        </TabPane>
        <TabPane tab="模板4" key="6">
        </TabPane>
      </Tabs>
    </div>
  )
}