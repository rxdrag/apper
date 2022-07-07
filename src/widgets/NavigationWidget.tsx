import React from 'react'
import { DeploymentUnitOutlined, FileOutlined, MenuOutlined, PartitionOutlined, SettingOutlined } from '@ant-design/icons'
import { Breadcrumb, Divider, Dropdown, Menu, Space } from 'antd'

// const logo = {
//   dark: '//img.alicdn.com/imgextra/i2/O1CN01NTUDi81fHLQvZCPnc_!!6000000003981-55-tps-1141-150.svg',
//   light:
//     '//img.alicdn.com/imgextra/i2/O1CN01Kq3OHU1fph6LGqjIz_!!6000000004056-55-tps-1141-150.svg',
// }

const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="#">
            页面管理
          </a>
        ),
        icon: <FileOutlined />
      },
      {
        key: '2',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="#">
            导航菜单
          </a>
        ),
        icon: <PartitionOutlined />,
      },
      {
        key: '3',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="#">
            领域模型
          </a>
        ),
        icon: <DeploymentUnitOutlined />
      },
      {
        key: '3',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="#">
            设置
          </a>
        ),
        icon: <SettingOutlined />
      },
    ]}
  />
);

export const NavigationWidget: React.FC = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', fontSize: 14, paddingLeft: "8px" }}>
      <Dropdown overlay={menu}>
        <a onClick={e => e.preventDefault()}>
          <Space>
            <MenuOutlined />
          </Space>
        </a>
      </Dropdown>

      <Divider type="vertical" />
      <Breadcrumb>
        <Breadcrumb.Item href="">
          <span>外贸管理</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>订单编辑</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
}
