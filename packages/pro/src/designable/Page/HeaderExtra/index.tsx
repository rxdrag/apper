import { DroppableWidget } from "@designable/react"
import { observer } from "@formily/react"
import React from "react"
import './locales'
import './schema'

const HeaderExtra = observer((props) => {
  return (
    <DroppableWidget
      {...props}
      style={{
        ...props['style'],
        display: "flex"
      }}
    >
      {props.children}
    </DroppableWidget>
  )
})

export default HeaderExtra