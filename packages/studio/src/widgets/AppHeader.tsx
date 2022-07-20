import { AppstoreOutlined, QuestionCircleOutlined, GithubOutlined } from "@ant-design/icons"
import { Divider, Space, Button } from "antd"
import { Header } from "antd/lib/layout/layout"
import React from "react"
import SvgIcon from "../common/SvgIcon"
import AvatarMenu from "./AvatarMenu"

const AppHeader = () => {
  return (
    <Header className="header float">
      <div className='logo'>
        <svg style={{ width: "40px", height: "40px" }} viewBox="0 0 24 24">
          <defs>
            <linearGradient id="logo_color" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3ca9f2" />
              <stop offset="90%" stopColor="#3a29e6" />
              <stop offset="100%" stopColor="#3ca9f2" />
            </linearGradient>
          </defs>
          <path
            style={{ fill: "url(#logo_color)" }}
            d="M23 11.5L19.95 10.37C19.69 9.22 19.04 8.56 19.04 8.56C17.4 6.92 14.75 6.92 13.11 8.56L11.63 10.04L5 3C4 7 5 11 7.45 14.22L2 19.5C2 19.5 10.89 21.5 16.07 17.45C18.83 15.29 19.45 14.03 19.84 12.7L23 11.5M17.71 11.72C17.32 12.11 16.68 12.11 16.29 11.72C15.9 11.33 15.9 10.7 16.29 10.31C16.68 9.92 17.32 9.92 17.71 10.31C18.1 10.7 18.1 11.33 17.71 11.72Z"
          />
        </svg>
        Apper
      </div>
      <Divider className='logo-divider' type='vertical' />
      <Space className='nav-area' size={"large"}>
        <Button type="primary" shape="round" icon={<AppstoreOutlined />}>应用</Button>
        <Button shape="round" className='nav-button' icon={
          <SvgIcon>
            <svg className='nav-icon' viewBox="0 0 24 24">
              <path fill="currentColor" d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L6.04,7.5L12,10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V9.21L13,12.58V19.29L19,15.91Z" />
            </svg>
          </SvgIcon>

        }>模型</Button>
        <Button shape="round" className='nav-button' icon={
          <SvgIcon>
            <svg className='nav-icon' viewBox="0 0 24 24">
              <path fill="currentColor" d="M21.7 18.6V17.6L22.8 16.8C22.9 16.7 23 16.6 22.9 16.5L21.9 14.8C21.9 14.7 21.7 14.7 21.6 14.7L20.4 15.2C20.1 15 19.8 14.8 19.5 14.7L19.3 13.4C19.3 13.3 19.2 13.2 19.1 13.2H17.1C16.9 13.2 16.8 13.3 16.8 13.4L16.6 14.7C16.3 14.9 16.1 15 15.8 15.2L14.6 14.7C14.5 14.7 14.4 14.7 14.3 14.8L13.3 16.5C13.3 16.6 13.3 16.7 13.4 16.8L14.5 17.6V18.6L13.4 19.4C13.3 19.5 13.2 19.6 13.3 19.7L14.3 21.4C14.4 21.5 14.5 21.5 14.6 21.5L15.8 21C16 21.2 16.3 21.4 16.6 21.5L16.8 22.8C16.9 22.9 17 23 17.1 23H19.1C19.2 23 19.3 22.9 19.3 22.8L19.5 21.5C19.8 21.3 20 21.2 20.3 21L21.5 21.4C21.6 21.4 21.7 21.4 21.8 21.3L22.8 19.6C22.9 19.5 22.9 19.4 22.8 19.4L21.7 18.6M18 19.5C17.2 19.5 16.5 18.8 16.5 18S17.2 16.5 18 16.5 19.5 17.2 19.5 18 18.8 19.5 18 19.5M12.3 22H3C1.9 22 1 21.1 1 20V4C1 2.9 1.9 2 3 2H21C22.1 2 23 2.9 23 4V13.1C22.4 12.5 21.7 12 21 11.7V6H3V20H11.3C11.5 20.7 11.8 21.4 12.3 22Z" />
            </svg>
          </SvgIcon>
        }
        >系统管理</Button>
        {/* <Button shape="round" className='nav-button'>文档</Button>
      <Button shape="round" className='nav-button'>Github</Button> */}
      </Space>
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
    </Header>
  )
}

export default AppHeader