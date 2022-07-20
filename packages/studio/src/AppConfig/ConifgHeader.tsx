import { AppstoreOutlined, QuestionCircleOutlined, GithubOutlined, HomeOutlined } from "@ant-design/icons"
import { Button, Divider, Menu, MenuProps, Space, Tabs } from "antd"
import { Header } from "antd/lib/layout/layout"
import React, { useCallback } from "react"
import { memo } from "react"
import AvatarMenu from "../AppManager/AvatarMenu"


const ConifgHeader = memo(() => {
  const onChange = useCallback((key: string) => {
    console.log(key);
  }, []);

  return (
    <Header className="header">
      <HomeOutlined />
      <Divider type='vertical' />
      <div>CRM管理</div>
      <Menu
        className="app-config-menu"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={[
          {
            key:1,
            label: "基础配置",
          },
          {
            key:2,
            label: "应用设计",
          },
          {
            key:3,
            label: "权限管理",
          },
        ]}
      />

      <Space>
        <Button className='min-button' size='large' shape="circle" icon={<QuestionCircleOutlined />} />
        <Button
          className='min-button'
          size='large'
          shape="circle"
          icon={<GithubOutlined />}
          href="https://github.com/rxdrag/apper"
          target="_blank"
        />
        <AvatarMenu />
      </Space>
    </Header >
  )
})

export default ConifgHeader