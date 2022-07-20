import { Layout } from 'antd';
import React from 'react';
import AppFooter from './widgets/AppFooter';
import AppHeader from './widgets/AppHeader';
import AppList from './widgets/AppList';
import AppManagebar from './widgets/AppManagebar';
const { Content } = Layout;

const App = () => (
  <Layout className="rx-studio">
    <AppHeader />
    <Content className='content'>
      <AppManagebar />
      <div className='content-inner'>
        <AppList />
        <AppFooter />
      </div>
    </Content>

  </Layout>
);

export default App