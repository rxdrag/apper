import React from 'react'
import { Card as AntdCard } from 'antd'

import { createBehavior, createResource } from '@designable/core'
import { DnFC } from '@designable/react'
import { locales } from './locales'
import { schema } from './schema'
import { ApFC } from 'src/types'

export const Card: ApFC<React.ComponentProps<typeof AntdCard>> = (props) => {
  return (
    <AntdCard
      {...props}
      title={
        <span data-content-editable="x-component-props.title">
          {props.title}
        </span>
      }
    >
      {props.children}
    </AntdCard>
  )
}

Card.Behavior = {
  name: 'Card',
  extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'Card',
  designerProps: {
    droppable: true,
    propsSchema: schema,
  },
  designerLocales: locales,
}

Card.Resource = {
  icon: 'CardSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        type: 'void',
        'x-component': 'Card',
        'x-component-props': {
          title: 'Title',
        },
      },
    },
  ],
}
