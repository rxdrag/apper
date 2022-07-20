import Icon, { AppstoreOutlined, GoldOutlined, PartitionOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Divider, Layout, Menu, Space } from 'antd';
import React from 'react';
import SvgIcon from './common/SvgIcon';
const { Header, Content, Footer } = Layout;

const App = () => (
  <Layout className="rx-studio">
    <Header className="header">
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
      <Space size={"large"}>
        <Button type="primary" shape="round" icon={<AppstoreOutlined />}>应用</Button>
        <Button shape="round" className='nav-button' icon={
          <SvgIcon>
            <svg style={{ width: "16px", height: "16px" }} viewBox="0 0 24 24">
              <path fill="currentColor" d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L6.04,7.5L12,10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V9.21L13,12.58V19.29L19,15.91Z" />
            </svg>
          </SvgIcon>

        }>模型</Button>
        <Button shape="round" className='nav-button'>系统管理</Button>
        {/* <Button shape="round" className='nav-button'>文档</Button>
        <Button shape="round" className='nav-button'>Github</Button> */}
      </Space>
    </Header>
    <Content className='content'>

    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Apper ©2022 Created by 悠闲的水
    </Footer>
  </Layout>
);

export default App