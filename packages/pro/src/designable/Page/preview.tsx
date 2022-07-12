import React, { useCallback, useMemo, useState } from 'react'
import { Descriptions, PageHeader, Statistic, Tabs } from 'antd'
import { createBehavior, createResource, TreeNode } from '@designable/core'
import { DnFC, TreeNodeWidget, useTreeNode } from '@designable/react'
import { createVoidFieldSchema } from '../../components/Field'
import { createEnsureTypeItemsNode, findNodeByComponentPath, hasNodeByComponentPath, queryNodesByComponentPath } from '../../shared'
import { LoadTemplate } from '../../common/LoadTemplate'
import { Locales } from './locales'
import { Schema } from './schema'
import HeaderExtra, { IPageHeaderExtraProps } from './HeaderExtra'
import HeaderContent, { IHeaderContentProps } from './HeaderContent'
import { BookOutlined } from '@ant-design/icons'
import Content, { IPageContentProps } from './Content'
import TabPanel, { IPageTablePanelProps } from './TabPanel'
import { useRemoveNode } from '../hooks/useRemoveNode'
import Footer, { IPageFooterProps } from './Footer'

export interface IPageProps {
  title?: string;
  subTitle?: string;
  children?: React.ReactNode;
}

const ensureObjectItemsNode = createEnsureTypeItemsNode('object')

const { TabPane } = Tabs;
const routes = [
  {
    path: 'index',
    breadcrumbName: 'First-level Menu',
  },
  {
    path: 'first',
    breadcrumbName: 'Second-level Menu',
  },
  {
    path: 'second',
    breadcrumbName: 'Third-level Menu',
  },
];

export const Page: DnFC<IPageProps> & {
  HeaderExtra?: React.FC<IPageHeaderExtraProps>,
  HeaderContent?: React.FC<IHeaderContentProps>,
  Content?: React.FC<IPageContentProps>,
  TabPanel?: React.FC<IPageTablePanelProps>,
  Footer?: React.FC<IPageFooterProps>,
} = (props) => {
  const { children, title, ...other } = props;
  const [selectedTabKey, setSelectedTabKey] = useState("1")
  const node = useTreeNode()

  const handleRemoveNode = (target: TreeNode) => {
    if (target.parent?.id === node.id && target?.props?.['x-component'] === 'Page.TabPanel') {
      const length = queryNodesByComponentPath(node, [
        'Page',
        'Page.TabPanel',
      ]).length
      if (!length || length <= 1) {
        const content = new TreeNode({
          componentName: 'Field',
          props: {
            type: 'void',
            'x-component': 'Page.Content',
            'x-component-props': {
              title: `Title`,
            },
          },
        })
        node.append(content)
      }
    }
  }

  useRemoveNode('Page', (target) => {
    if (target && Array.isArray(target)) {
      for (const child of target) {
        handleRemoveNode(child)
      }
    } else if (target) {
      handleRemoveNode(target as any)
    }
  })

  const headerExtra = findNodeByComponentPath(node, [
    'Page',
    'Page.HeaderExtra',
  ])

  const headerContent = findNodeByComponentPath(node, [
    'Page',
    'Page.HeaderContent',
  ])

  const footer = findNodeByComponentPath(node, [
    'Page',
    'Page.Footer',
  ])

  const tabs = queryNodesByComponentPath(node, [
    'Page',
    'Page.TabPanel',
  ])

  const otherChildrenNodes = node.children?.filter(child =>
    child.id !== headerExtra?.id &&
    child.id !== headerContent?.id &&
    child.id !== footer?.id &&
    !tabs?.find(tab => tab.id === child.id)
  )

  const handleSelectTab = (key: string) => {
    setSelectedTabKey(key);
  };

  const selectedTab = tabs?.[parseInt(selectedTabKey) - 1]

  return (
    <div {...other}>
      <LoadTemplate
        actions={[
          {
            title: node.getMessage('addExtra'),
            icon: 'AddOperation',
            onClick: () => {
              if (
                hasNodeByComponentPath(node, [
                  'Page',
                  'Page.HeaderExtra',
                ])
              )
                return
              const extra = new TreeNode({
                componentName: 'Field',
                props: {
                  type: 'void',
                  'x-component': 'Page.HeaderExtra',
                  'x-component-props': {
                    title: `Title`,
                  },
                },
              })
              node.insertChildren(0, extra)
            },
          },
          {
            title: node.getMessage('addHeaderContent'),
            icon: <BookOutlined />,
            onClick: () => {
              if (
                hasNodeByComponentPath(node, [
                  'Page',
                  'Page.HeaderContent',
                ])
              )
                return
              const headerContent = new TreeNode({
                componentName: 'Field',
                props: {
                  type: 'void',
                  'x-component': 'Page.HeaderContent',
                  'x-component-props': {
                    title: `Title`,
                  },
                },
              })
              node.insertChildren(0, headerContent)
            },
          },
          {
            title: node.getMessage('addPanel'),
            icon: "AddPanel",
            onClick: () => {
              const content = findNodeByComponentPath(node, [
                'Page',
                'Page.Content',
              ])

              content?.remove()
              const tabPanel = new TreeNode({
                componentName: 'Field',
                props: {
                  type: 'void',
                  'x-component': 'Page.TabPanel',
                  'x-component-props': {
                    title: `Unnamed title`,
                  },
                },
              })
              node.append(tabPanel)
              const tabs = queryNodesByComponentPath(node, [
                'Page',
                'Page.TabPanel',
              ])
              setSelectedTabKey(tabs.length + "")
            },
          },
          {
            title: node.getMessage('addFooter'),
            icon: "AddPanel",
            onClick: () => {
              if (
                hasNodeByComponentPath(node, [
                  'Page',
                  'Page.Footer',
                ])
              ){
                return
              }
                
              const footer = new TreeNode({
                componentName: 'Field',
                props: {
                  type: 'void',
                  'x-component': 'Page.Footer',
                  'x-component-props': {
                    title: `Title`,
                  },
                },
              })
              node.append(footer)
            },
          },
        ]}
      />
      <PageHeader
        className="site-page-header-responsive"
        onBack={() => window.history.back()}
        title="Title"
        subTitle="This is a subtitle"
        extra={headerExtra && <TreeNodeWidget node={headerExtra} />}
        footer={
          <Tabs activeKey={selectedTabKey}  onChange={handleSelectTab}>
            {
              tabs.map((tab, index) => {
                return (
                  <TabPane tab={tab?.props?.['x-component-props']?.["title"]} key={index + 1} />
                )
              })
            }

          </Tabs>
        }
        breadcrumb={{ routes }}
      >
        {headerContent && <TreeNodeWidget node={headerContent} />}
      </PageHeader>
      <TreeNodeWidget node = {selectedTab} />
      {
        otherChildrenNodes?.map((child) => {
          return (
            child && <TreeNodeWidget node={child} />
          )
        })
      }
      <TreeNodeWidget node = {footer} />
    </div>

  )
}

Page.HeaderExtra = HeaderExtra
Page.HeaderContent = HeaderContent
Page.Content = Content
Page.TabPanel = TabPanel
Page.Footer = Footer

Page.Behavior = createBehavior(
  {
    name: 'Page',
    extends: ['Field'],
    selector: (node) => node.props['x-component'] === 'Page',
    designerProps: {
      droppable: true,
      propsSchema: createVoidFieldSchema(Schema),
    },
    designerLocales: Locales,
  },
  {
    name: 'Page.HeaderExtra',
    extends: ['Field'],
    selector: (node) => node.props['x-component'] === 'Page.HeaderExtra',
    designerProps: {
      droppable: true,
      propsSchema: createVoidFieldSchema(Schema.HeaderExtra),
    },
    designerLocales: Locales.HeaderExtra,
  },
  {
    name: 'Page.HeaderContent',
    extends: ['Field'],
    selector: (node) => node.props['x-component'] === 'Page.HeaderContent',
    designerProps: {
      droppable: true,
      propsSchema: createVoidFieldSchema(Schema.HeaderContent),
    },
    designerLocales: Locales.HeaderContent,
  },
  {
    name: 'Page.Content',
    extends: ['Field'],
    selector: (node) => node.props['x-component'] === 'Page.Content',
    designerProps: {
      droppable: true,
      propsSchema: createVoidFieldSchema(Schema.Content),
    },
    designerLocales: Locales.Content,
  },
  {
    name: 'Page.TabPanel',
    extends: ['Field'],
    selector: (node) => node.props['x-component'] === 'Page.TabPanel',
    designerProps: {
      droppable: true,
      propsSchema: createVoidFieldSchema(Schema.TabPanel),
    },
    designerLocales: Locales.TabPanel,
  },
  {
    name: 'Page.Footer',
    extends: ['Field'],
    selector: (node) => node.props['x-component'] === 'Page.Footer',
    designerProps: {
      droppable: true,
      propsSchema: createVoidFieldSchema(Schema.Footer),
    },
    designerLocales: Locales.Footer,
  }
)

Page.Resource = createResource({
  icon: 'CardSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        type: 'void',
        'x-component': 'Page',
        'x-component-props': {
          title: "",
        },
      },
      children: [
        {
          componentName: 'Field',
          props: {
            type: 'void',
            'x-component': 'Page.HeaderExtra',
            'x-component-props': {
              title: "ddd",
            },

          },
        },
        {
          componentName: 'Field',
          props: {
            type: 'void',
            'x-component': 'Page.HeaderContent',
            'x-component-props': {
              title: "ddd",
            },

          },
        },
        {
          componentName: 'Field',
          props: {
            type: 'void',
            'x-component': 'Page.Content',
            'x-component-props': {
              title: "ddd",
            },

          },
        }
      ]
    },
  ],
})
