import { DroppableWidget } from "@designable/react"
import { observer } from "@formily/react"
import React, { Fragment } from "react"
import './locales'
import './schema'

export interface IPageFooterProps {
  children?: React.ReactNode
}

const Footer = observer((props:IPageFooterProps) => {
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

export default Footer