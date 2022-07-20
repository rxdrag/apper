import { Layout } from 'antd';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import AppFooter from './widgets/AppFooter';
import AppHeader from './widgets/AppHeader';
import AppList from './widgets/AppList';
import AppManagebar from './widgets/AppManagebar';
const { Content } = Layout;

const App = memo(() => {
  const [scrolled, setScrolled] = useState(false);
  const ref = useRef<HTMLElement>(null)
  const handleScroll = useCallback((event: Event) => {
    const scrollRect = ref?.current?.getBoundingClientRect();
    if (scrollRect.y < 40) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }, [])

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    }
  }, [])

  return (
    <Layout className="rx-studio">
      <AppHeader scrolled = {scrolled}/>
      <Content ref={ref} className='content'>
        <AppManagebar />
        <div className='content-inner'>
          <AppList />
          <AppFooter />
        </div>
      </Content>

    </Layout>
  )
});

export default App