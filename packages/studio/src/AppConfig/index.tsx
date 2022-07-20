import React from "react"
import { memo } from "react"
import { Layout } from 'antd';
import AppFooter from "../AppManager/AppFooter";
import DeviceList from "./DeviceList";
import ConifgHeader from "./ConifgHeader";

const { Header, Content } = Layout;

const AppConfig = memo(()=>{
  return (
    <Layout className="rx-studio">
      <ConifgHeader />
      <Content className='content'>
        <div className='content-inner'>
          <DeviceList />
          <AppFooter />
        </div>
      </Content>
    </Layout>
  )
})

export default AppConfig;