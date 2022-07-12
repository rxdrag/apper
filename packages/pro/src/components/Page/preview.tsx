import React from 'react'
import { Table } from '@alifd/next'
import { TableProps } from '@alifd/next/types/table'
import { TreeNode, createBehavior, createResource } from '@designable/core'
import {
  useTreeNode,
  TreeNodeWidget,
  DroppableWidget,
  useNodeIdProps,
  DnFC,
} from '@designable/react'
import { ArrayBase } from '@formily/next'
import { observer } from '@formily/react'
import { LoadTemplate } from '@designable/formily-antd/esm/common/LoadTemplate'
import cls from 'classnames'
import {
  queryNodesByComponentPath,
  hasNodeByComponentPath,
  findNodeByComponentPath,
  createEnsureTypeItemsNode,
} from '@designable/formily-antd/esm/shared'
import { useDropTemplate } from '@designable/formily-antd/esm/hooks'
import { createArrayBehavior } from '@designable/formily-antd/esm/components/ArrayBase'
import './styles.less'
import { createVoidFieldSchema } from '@designable/formily-antd/esm/components/Field'
import { PageContainerSchema } from './schema'
import { PageContainerLocales } from './locales'

const ensureObjectItemsNode = createEnsureTypeItemsNode('object')

export const PageContainer: DnFC<TableProps> = observer((props) => {
  const node = useTreeNode()
  const nodeId = useNodeIdProps()
  useDropTemplate('PageContainer', (source) => {
    const sortHandleNode = new TreeNode({
      componentName: 'Field',
      props: {
        type: 'void',
        'x-component': 'PageContainer.Column',
        'x-component-props': {
          title: `Title`,
        },
      },
      children: [
        {
          componentName: 'Field',
          props: {
            type: 'void',
            'x-component': 'PageContainer.SortHandle',
          },
        },
      ],
    })
    const indexNode = new TreeNode({
      componentName: 'Field',
      props: {
        type: 'void',
        'x-component': 'PageContainer.Column',
        'x-component-props': {
          title: `Title`,
        },
      },
      children: [
        {
          componentName: 'Field',
          props: {
            type: 'void',
            'x-component': 'PageContainer.Index',
          },
        },
      ],
    })
    const columnNode = new TreeNode({
      componentName: 'Field',
      props: {
        type: 'void',
        'x-component': 'PageContainer.Column',
        'x-component-props': {
          title: `Title`,
        },
      },
      children: source.map((node) => {
        node.props.title = undefined
        return node
      }),
    })

    const operationNode = new TreeNode({
      componentName: 'Field',
      props: {
        type: 'void',
        'x-component': 'PageContainer.Column',
        'x-component-props': {
          title: `Title`,
        },
      },
      children: [
        {
          componentName: 'Field',
          props: {
            type: 'void',
            'x-component': 'PageContainer.Remove',
          },
        },
        {
          componentName: 'Field',
          props: {
            type: 'void',
            'x-component': 'PageContainer.MoveDown',
          },
        },
        {
          componentName: 'Field',
          props: {
            type: 'void',
            'x-component': 'PageContainer.MoveUp',
          },
        },
      ],
    })
    const objectNode = new TreeNode({
      componentName: 'Field',
      props: {
        type: 'object',
      },
      children: [sortHandleNode, indexNode, columnNode, operationNode],
    })
    const additionNode = new TreeNode({
      componentName: 'Field',
      props: {
        type: 'void',
        title: 'Addition',
        'x-component': 'PageContainer.Addition',
      },
    })
    return [objectNode, additionNode]
  })
  const columns = queryNodesByComponentPath(node, [
    'PageContainer',
    '*',
    'PageContainer.Column',
  ])
  const additions = queryNodesByComponentPath(node, [
    'PageContainer',
    'PageContainer.Addition',
  ])
  const defaultRowKey = () => {
    return node.id
  }

  const renderTable = () => {
    if (node.children.length === 0) return <DroppableWidget />
    return (
      <ArrayBase disabled>
        <Table
          size="small"
          hasBorder
          {...props}
          className={cls('ant-formily-array-table', props.className)}
          style={{ marginBottom: 10, ...props.style }}
          primaryKey={defaultRowKey()}
          dataSource={[{ id: '1' }]}
        >
          {columns.map((node) => {
            const children = node.children.map((child) => {
              return <TreeNodeWidget node={child} key={child.id} />
            })
            const props = node.props['x-component-props']
            return (
              <Table.Column
                {...node.props['x-component-props']}
                dataIndex={node.id}
                title={
                  <div data-content-editable="x-component-props.title">
                    {props.title}
                  </div>
                }
                className={`data-id:${node.id}`}
                key={node.id}
                data-designer-node-id={node.id}
                cell={(_, key: number) => {
                  return (
                    <ArrayBase.Item key={key} index={key} record={null}>
                      {children.length > 0 ? children : 'Droppable'}
                    </ArrayBase.Item>
                  )
                }}
              />
            )
          })}
          {columns.length === 0 && (
            <Table.Column cell={() => <DroppableWidget />} />
          )}
        </Table>
        {additions.map((child) => {
          return <TreeNodeWidget node={child} key={child.id} />
        })}
      </ArrayBase>
    )
  }

  useDropTemplate('PageContainer.Column', (source) => {
    return source.map((node) => {
      node.props.title = undefined
      return node
    })
  })

  return (
    <div {...nodeId} className="dn-page-container">
      {renderTable()}
      <LoadTemplate
        actions={[
          {
            title: node.getMessage('addIndex'),
            icon: 'AddIndex',
            onClick: () => {
              if (
                hasNodeByComponentPath(node, [
                  'PageContainer',
                  '*',
                  'PageContainer.Column',
                  'PageContainer.Index',
                ])
              )
                return
              const tableColumn = new TreeNode({
                componentName: 'Field',
                props: {
                  type: 'void',
                  'x-component': 'PageContainer.Column',
                  'x-component-props': {
                    title: `Title`,
                  },
                },
                children: [
                  {
                    componentName: 'Field',
                    props: {
                      type: 'void',
                      'x-component': 'PageContainer.Index',
                    },
                  },
                ],
              })
              const sortNode = findNodeByComponentPath(node, [
                'PageContainer',
                '*',
                'PageContainer.Column',
                'PageContainer.SortHandle',
              ])
              if (sortNode) {
                sortNode.parent.insertAfter(tableColumn)
              } else {
                ensureObjectItemsNode(node).prepend(tableColumn)
              }
            },
          },
          {
            title: node.getMessage('addColumn'),
            icon: 'AddColumn',
            onClick: () => {
              const operationNode = findNodeByComponentPath(node, [
                'PageContainer',
                '*',
                'PageContainer.Column',
                (name) => {
                  return (
                    name === 'PageContainer.Remove' ||
                    name === 'PageContainer.MoveDown' ||
                    name === 'PageContainer.MoveUp'
                  )
                },
              ])
              const tableColumn = new TreeNode({
                componentName: 'Field',
                props: {
                  type: 'void',
                  'x-component': 'PageContainer.Column',
                  'x-component-props': {
                    title: `Title`,
                  },
                },
              })
              if (operationNode) {
                operationNode.parent.insertBefore(tableColumn)
              } else {
                ensureObjectItemsNode(node).append(tableColumn)
              }
            },
          },
          {
            title: node.getMessage('addOperation'),
            icon: 'AddOperation',
            onClick: () => {
              const oldOperationNode = findNodeByComponentPath(node, [
                'PageContainer',
                '*',
                'PageContainer.Column',
                (name) => {
                  return (
                    name === 'PageContainer.Remove' ||
                    name === 'PageContainer.MoveDown' ||
                    name === 'PageContainer.MoveUp'
                  )
                },
              ])
              const oldAdditionNode = findNodeByComponentPath(node, [
                'PageContainer',
                'PageContainer.Addition',
              ])
              if (!oldOperationNode) {
                const operationNode = new TreeNode({
                  componentName: 'Field',
                  props: {
                    type: 'void',
                    'x-component': 'PageContainer.Column',
                    'x-component-props': {
                      title: `Title`,
                    },
                  },
                  children: [
                    {
                      componentName: 'Field',
                      props: {
                        type: 'void',
                        'x-component': 'PageContainer.Remove',
                      },
                    },
                    {
                      componentName: 'Field',
                      props: {
                        type: 'void',
                        'x-component': 'PageContainer.MoveDown',
                      },
                    },
                    {
                      componentName: 'Field',
                      props: {
                        type: 'void',
                        'x-component': 'PageContainer.MoveUp',
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
                    'x-component': 'PageContainer.Addition',
                  },
                })
                ensureObjectItemsNode(node).insertAfter(additionNode)
              }
            },
          },
        ]}
      />
    </div>
  )
})

ArrayBase.mixin(PageContainer)

PageContainer.Behavior = createBehavior(createArrayBehavior('PageContainer'), {
  name: 'PageContainer.Column',
  extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'PageContainer.Column',
  designerProps: {
    droppable: true,
    allowDrop: (node) =>
      node.props['type'] === 'object' &&
      node.parent?.props?.['x-component'] === 'PageContainer',
    propsSchema: createVoidFieldSchema(PageContainerSchema.Column as any),
  },
  designerLocales: PageContainerLocales,
})

PageContainer.Resource = createResource({
  icon: 'ArrayTableSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        type: 'array',
        'x-decorator': 'FormItem',
        'x-component': 'PageContainer',
      },
    },
  ],
})
