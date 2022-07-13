import { PageHeader } from "antd";
import React, { useRef } from "react"
import { PageContainer } from "./PageContainer";
import { Field, RecursionField, useField, useFieldSchema } from '@formily/react';

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
  const { showGoback, title, subtitle, hasBreadcrumb, children, ...other } = props
  const fieldSchema = useFieldSchema()
  const slots = useRef({ headerExtra: null, extra: null })
  for (const key of Object.keys(fieldSchema.properties || {})) {
    const childSchema = fieldSchema.properties[key]
    if (childSchema["x-component"] === 'Page.HeaderExtra'){
      console.log("哈哈哈", childSchema.toJSON())
      slots.current.headerExtra = childSchema
    }
  }

  return (
    <PageContainer>
      <PageHeader
        //className="site-page-header-responsive"
        onBack={showGoback ? () => window.history.back() : undefined}
        title={title}
        subTitle={subtitle}
        extra={ slots.current.headerExtra && <RecursionField schema={slots.current.headerExtra} />}
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