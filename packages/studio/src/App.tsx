import { AppstoreOutlined, GithubOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Button, Divider, Layout, Space } from 'antd';
import React from 'react';
import SvgIcon from './common/SvgIcon';
import AppFooter from './widgets/AppFooter';
import AppHeader from './widgets/AppHeader';
import AppManagebar from './widgets/AppManagebar';
import AvatarMenu from './widgets/AvatarMenu';
const { Header, Content } = Layout;

const App = () => (
  <Layout className="rx-studio">
    <AppHeader />
    <Content className='content'>
      <AppManagebar />
      <div className='content-inner'>
        <div className='apps-block'>

        </div>
        <AppFooter />
      </div>
    </Content>

  </Layout>
);

export default App