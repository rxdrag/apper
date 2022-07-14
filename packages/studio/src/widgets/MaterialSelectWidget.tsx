import { ToolOutlined } from "@ant-design/icons"
import { Button, Input, Menu, MenuProps, Tabs } from "antd"
import React from "react"
import "./index.less"

const handleMenuClick: MenuProps['onClick'] = e => {
  console.log('click', e);
};

const { Search } = Input;

const menu = (
  <Menu
    onClick={handleMenuClick}
    items={[
      {
        label: '表单组件',
        key: '1',
      },
      {
        label: '业务组件',
        key: '2',
      },
      {
        label: '测试组件',
        key: '3',
      },
      {
        label: '测试组件',
        key: '4',
      },
      {
        label: '测试组件',
        key: '5',
      },
      {
        label: '测试组件',
        key: '6',
      },
      {
        label: '测试组件',
        key: '7',
      },
    ]}
  />
);
const { TabPane } = Tabs;

export const MaterialSelectWidget: React.FC = () => {
  const onChange = (key: string) => {
    console.log(key);
  };
  return (
    <div className="rx-material-select-widget">
      <div style={{ padding: "16px 8px 0 8px", display: "flex" }}>
        <Search allowClear style={{ flex: 1 }} size="middle" />
      </div>
      <Tabs defaultActiveKey="1"
        tabBarExtraContent={
          <Button shape="circle" style={{ border: 0 }}
            icon={<ToolOutlined style={{ fontSize: 14, transform: "rotateY(180deg)" }} />}
          />
        }
        onChange={onChange}>
        <TabPane tab="表单" key="1">
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