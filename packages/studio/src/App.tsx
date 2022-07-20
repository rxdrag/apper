import { Layout } from 'antd';
import React, { memo} from 'react';
import AppManager from './AppManager';
import AppFooter from './AppManager/AppFooter';
import AppHeader from './AppManager/AppHeader';
import AppList from './AppManager/AppList';
import AppManagebar from './AppManager/AppManagebar';
const { Content } = Layout;

const App = memo(() => {
  return (
    <AppManager />
  )
});

export default App