import React from 'react'
import { Descriptions, PageHeader, Statistic, Tabs } from 'antd'
import { createBehavior, createResource, TreeNode } from '@designable/core'
import { DnFC, TreeNodeWidget, useTreeNode } from '@designable/react'
import { createVoidFieldSchema } from '../../components/Field'
import { createEnsureTypeItemsNode, findNodeByComponentPath, hasNodeByComponentPath } from '../../shared'
import { LoadTemplate } from '../../common/LoadTemplate'
import { Locales } from './locales'
import { Schema } from './schema'
import HeaderExtra from './HeaderExtra'
import HeaderContent from './HeaderContent'
import { BookOutlined } from '@ant-design/icons'
import Content from './Content'

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

const renderContent = (column = 2) => (
  <Descriptions size="small" column={column}>
    <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
    <Descriptions.Item label="Association">
      <a>421421</a>
    </Descriptions.Item>
    <Descriptions.Item label="Creation Time">2017-01-10</Descriptions.Item>
    <Descriptions.Item label="Effective Time">2017-10-10</Descriptions.Item>
    <Descriptions.Item label="Remarks">
      Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
    </Descriptions.Item>
  </Descriptions>
);

const extraContent = (
  <div
    style={{
      display: 'flex',
      width: 'max-content',
      justifyContent: 'flex-end',
    }}
  >
    <Statistic
      title="Status"
      value="Pending"
      style={{
        marginRight: 32,
      }}
    />
    <Statistic title="Price" prefix="$" value={568.08} />
  </div>
);

export const Page: DnFC<IPageProps> & {
  HeaderExtra?: React.FC<React.ComponentProps<any>>,
  HeaderContent?: React.FC<React.ComponentProps<any>>,
  Content?: React.FC<React.ComponentProps<any>>,
  TabPanel?: React.FC<React.ComponentProps<any>>,
} = (props) => {
  const { children, title, ...other } = props;
  const node = useTreeNode()

  const headerExtra = findNodeByComponentPath(node, [
    'Page',
    'Page.HeaderExtra',
  ])

  const headerContent = findNodeByComponentPath(node, [
    'Page',
    'Page.HeaderContent',
  ])

  const otherChildrenNodes = node.children?.filter(child => child.id !== headerExtra?.id && child.id !== headerContent?.id)

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
                  'ArrayTable',
                  '*',
                  'ArrayTable.Column',
                  'ArrayTable.SortHandle',
                ])
              )
                return
              const tableColumn = new TreeNode({
                componentName: 'Field',
                props: {
                  type: 'void',
                  'x-component': 'ArrayTable.Column',
                  'x-component-props': {
                    title: `Title`,
                  },
                },
                children: [
                  {
                    componentName: 'Field',
                    props: {
                      type: 'void',
                      'x-component': 'ArrayTable.SortHandle',
                    },
                  },
                ],
              })
              ensureObjectItemsNode(node).prepend(tableColumn)
            },
          },
          {
            title: node.getMessage('addHeaderContent'),
            icon: <BookOutlined />,
            onClick: () => {
              if (
                hasNodeByComponentPath(node, [
                  'ArrayTable',
                  '*',
                  'ArrayTable.Column',
                  'ArrayTable.Index',
                ])
              )
                return
              const tableColumn = new TreeNode({
                componentName: 'Field',
                props: {
                  type: 'void',
                  'x-component': 'ArrayTable.Column',
                  'x-component-props': {
                    title: `Title`,
                  },
                },
                children: [
                  {
                    componentName: 'Field',
                    props: {
                      type: 'void',
                      'x-component': 'ArrayTable.Index',
                    },
                  },
                ],
              })
              const sortNode = findNodeByComponentPath(node, [
                'ArrayTable',
                '*',
                'ArrayTable.Column',
                'ArrayTable.SortHandle',
              ])
              if (sortNode) {
                sortNode.parent.insertAfter(tableColumn)
              } else {
                ensureObjectItemsNode(node).prepend(tableColumn)
              }
            },
          },
          {
            title: node.getMessage('addPanel'),
            icon: "AddPanel",
            onClick: () => {
              const oldOperationNode = findNodeByComponentPath(node, [
                'ArrayTable',
                '*',
                'ArrayTable.Column',
                (name) => {
                  return (
                    name === 'ArrayTable.Remove' ||
                    name === 'ArrayTable.MoveDown' ||
                    name === 'ArrayTable.MoveUp'
                  )
                },
              ])
              const oldAdditionNode = findNodeByComponentPath(node, [
                'ArrayTable',
                'ArrayTable.Addition',
              ])
              if (!oldOperationNode) {
                const operationNode = new TreeNode({
                  componentName: 'Field',
                  props: {
                    type: 'void',
                    'x-component': 'ArrayTable.Column',
                    'x-component-props': {
                      title: `Title`,
                    },
                  },
                  children: [
                    {
                      componentName: 'Field',
                      props: {
                        type: 'void',
                        'x-component': 'ArrayTable.Remove',
                      },
                    },
                    {
                      componentName: 'Field',
                      props: {
                        type: 'void',
                        'x-component': 'ArrayTable.MoveDown',
                      },
                    },
                    {
                      componentName: 'Field',
                      props: {
                        type: 'void',
                        'x-component': 'ArrayTable.MoveUp',
                      },
                    },
                  ],
                })
                ensureObjectItemsNode(node).append(operationNode)
              }
              if (!oldAdditionNode) {
                const additionNode = new TreeNode({
                  componentName: 'Field',
                  props: {
                    type: 'void',
                    title: 'Addition',
                    'x-component': 'ArrayTable.Addition',
                  },
                })
                ensureObjectItemsNode(node).insertAfter(additionNode)
              }
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
          <Tabs defaultActiveKey="1">
            <TabPane tab="Details" key="1" />
            <TabPane tab="Rule" key="2" />
          </Tabs>
        }
        breadcrumb={{ routes }}
      >
        {headerContent && <TreeNodeWidget node={headerContent} />}
      </PageHeader>
      {
        otherChildrenNodes?.map((child) => {
          return (
            child && <TreeNodeWidget node={child} />
          )
        })
      }
    </div>

  )
}

Page.HeaderExtra = HeaderExtra
Page.HeaderContent = HeaderContent
Page.Content = Content

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
