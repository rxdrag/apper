import React from 'react'
import { useTheme } from '@designable/react'
import { HomeOutlined, UserOutlined } from '@ant-design/icons'
import { Breadcrumb } from 'antd'

const logo = {
  dark: '//img.alicdn.com/imgextra/i2/O1CN01NTUDi81fHLQvZCPnc_!!6000000003981-55-tps-1141-150.svg',
  light:
    '//img.alicdn.com/imgextra/i2/O1CN01Kq3OHU1fph6LGqjIz_!!6000000004056-55-tps-1141-150.svg',
}

export const LogoWidget: React.FC = () => {
  const url = logo[useTheme()]
  return (
    <div style={{ display: 'flex', alignItems: 'center', fontSize: 14 }}>
      <Breadcrumb>
        <Breadcrumb.Item href="">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item href="">
          <span>Application List</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Application</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
}
