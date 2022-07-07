import React from 'react'
import { useTheme } from '@designable/react'
import { HomeOutlined, UserOutlined } from '@ant-design/icons'
import { Breadcrumb, Divider } from 'antd'

const logo = {
  dark: '//img.alicdn.com/imgextra/i2/O1CN01NTUDi81fHLQvZCPnc_!!6000000003981-55-tps-1141-150.svg',
  light:
    '//img.alicdn.com/imgextra/i2/O1CN01Kq3OHU1fph6LGqjIz_!!6000000004056-55-tps-1141-150.svg',
}

export const LogoWidget: React.FC = () => {
  const url = logo[useTheme()]
  return (
    <div style={{ display: 'flex', alignItems: 'center', fontSize: 14, paddingLeft:"8px" }}>
      <HomeOutlined />
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
