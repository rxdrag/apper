import React from 'react'
import { Button, Card as AntdCard, Descriptions, PageHeader, Statistic, Tabs } from 'antd'
import { createBehavior, createResource, TreeNode } from '@designable/core'
import { DnFC, DroppableWidget, TreeNodeWidget, useTreeNode } from '@designable/react'
import { createVoidFieldSchema } from '../../Field'
import { createEnsureTypeItemsNode, findNodeByComponentPath, hasNodeByComponentPath } from '../../../shared'
import { HeaderSchema } from './schema'
import { HeaderLocales } from './locales';

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

const Content: React.FC<{ children: React.ReactNode; extra: React.ReactNode }> = ({
  children,
  extra,
}) => (
  <div className="content">
    <div className="main">{children}</div>
    <div className="extra">{extra}</div>
  </div>
);


export const Header: DnFC<React.ComponentProps<typeof AntdCard>> = (props) => {
  const { children, title, ...other } = props;
  const node = useTreeNode()

  // React.Children.map(children, (child: any, index) => {
  //   //console.log("哈哈", child?.['type'], child?.['type']?.['displayName'])
  //   return (
  //     <div>
  //       {child}
  //     </div>
  //   );
  // });

  return (
    <div {...other}>
      <PageHeader
        className="site-page-header-responsive"
        onBack={() => window.history.back()}
        title="Title"
        subTitle="This is a subtitle"
        extra={[
          <Button key="3">Operation</Button>,
          <Button key="2">Operation</Button>,
          <Button key="1" type="primary">
            Primary
          </Button>,
        ]}
        footer={
          <Tabs defaultActiveKey="1">
            <TabPane tab="Details" key="1" />
            <TabPane tab="Rule" key="2" />
          </Tabs>
        }

        breadcrumb={{ routes }}
      >
        <Content extra={extraContent}>{renderContent()}</Content>
      </PageHeader>
    </div>

  )
}

