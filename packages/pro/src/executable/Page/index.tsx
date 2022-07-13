import { PageHeader } from "antd";
import React from "react"
import { PageContainer } from "./PageContainer";

export interface IPageProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  hasBreadcrumb?: boolean;
  showGoback?: boolean;
}

export const routesPlaceholder = [
  {
    path: '$path1',
    breadcrumbName: 'Path1',
  },
  {
    path: '$path2',
    breadcrumbName: 'Path2',
  }
];

const Page = (props: IPageProps) => {
  const {showGoback, title, subtitle, hasBreadcrumb, ...other} = props
  return (
    <PageContainer>
      <PageHeader
        //className="site-page-header-responsive"
        onBack={showGoback ? () => window.history.back() : undefined}
        title={title}
        subTitle={subtitle}
        // extra={}
        // footer={
        //   <Tabs activeKey={selectedTabKey} onChange={handleSelectTab}>
        //     {
        //       tabs.map((tab, index) => {
        //         return (
        //           <TabPane tab={tab?.props?.['x-component-props']?.["title"]} key={index + 1} />
        //         )
        //       })
        //     }

        //   </Tabs>
        // }
        breadcrumb={hasBreadcrumb ? { routes: routesPlaceholder } : undefined}
      >
        {/* {headerContent && <TreeNodeWidget node={headerContent} />} */}
      </PageHeader>
    </PageContainer>
  )
}

export default Page