import { DownOutlined, PlusOutlined } from "@ant-design/icons"
import { Button, Divider, Dropdown, Input, Menu, MenuProps, Space } from "antd"
import React from "react"

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
    ]}
  />
);

export const MaterialSelectWidget: React.FC = () => {
  return (
    <div>
      <div style={{ padding: "8px", display: "flex" }}>
        <Dropdown overlay={menu} trigger={['click']}>
          <Button>
            <Space>
              表单组件
              <DownOutlined style={{ fontSize: "10px" }} />
            </Space>
          </Button>
        </Dropdown>
        <div style={{ flex: 1 }}></div>
        <Button shape="circle" style={{ border: 0 }} icon={<PlusOutlined />} />
      </div>
      <Divider style={{ margin: 0 }} />
      <div style={{ padding: "8px", display: "flex" }}>
        <Search allowClear style={{ flex: 1 }} />
      </div>
    </div>
  )
}