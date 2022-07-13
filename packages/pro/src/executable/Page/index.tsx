import { PageHeader, Tabs } from "antd";
import React, { useRef, useState } from "react"
import { PageContainer } from "./PageContainer";
import { Field, RecursionField, useField, useFieldSchema } from '@formily/react';

const { TabPane } = Tabs;

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
  const [selectedTabKey, setSelectedTabKey] = useState("1")
  const fieldSchema = useFieldSchema()
  const slots = {
    headerExtra: null,
    headerContent: null,
    footer: null,
    tabs: [],
    otherChildren: []
  }

  for (const key of Object.keys(fieldSchema.properties || {})) {
    const childSchema = fieldSchema.properties[key]
    if (childSchema["x-component"] === 'Page.HeaderExtra') {
      slots.headerExtra = childSchema
    } else if (childSchema["x-component"] === 'Page.HeaderContent') {
      slots.headerContent = childSchema
    } else if (childSchema["x-component"] === 'Page.Footer') {
      slots.footer = childSchema
    } else if (childSchema["x-component"] === 'Page.TabPanel') {
      slots.tabs.push(childSchema)
    } else {
      slots.otherChildren.push(childSchema)
    }
  }

  const handleSelectTab = (key: string) => {
    setSelectedTabKey(key);
  };

  const selectedTab = slots.tabs?.[parseInt(selectedTabKey) - 1]

  return (
    <PageContainer>
      <PageHeader
        //className="site-page-header-responsive"
        onBack={showGoback ? () => window.history.back() : undefined}
        title={title}
        subTitle={subtitle}
        extra={slots.headerExtra && <RecursionField schema={slots.headerExtra} />}
        footer={
          slots.tabs && <Tabs activeKey={selectedTabKey} onChange={handleSelectTab}>
            {
              slots.tabs.map((tab, index) => {
                return (
                  <TabPane tab={tab['x-component-props']?.["title"]} key={index + 1} />
                )
              })
            }

          </Tabs>
        }
        breadcrumb={hasBreadcrumb ? { routes: routesPlaceholder } : undefined}
      >
        {slots.headerContent && <RecursionField schema={slots.headerContent} />}
      </PageHeader>
      
      {selectedTab && <RecursionField schema={selectedTab} />}
      {
        slots.otherChildren?.map((child, index) => {
          return (
            <RecursionField key={index} schema={child} />
          )
        })
      }
      {slots.footer && <RecursionField schema={slots.footer} />}
    </PageContainer>
  )
}

export default Page