import { DroppableWidget } from "@designable/react"
import { observer } from "@formily/react"
import React, { Fragment } from "react"
import './locales'
import './schema'
import '../index.less'

const Content = observer((props) => {
  return (
    <div className="content">
      <DroppableWidget
        {...props}
        style={{
          ...props['style'],
          display: "flex",
          flex: 1
        }}
      >
        {props.children}
      </DroppableWidget>
    </div>
  )
})

export default Content