import { DroppableWidget } from "@designable/react"
import { observer } from "@formily/react"
import React from "react"
import './locales'
import './schema'
import '../index.less'

export interface IPageTablePanelProps{
  title?: string,
  children?:React.ReactNode
}

const TabPanel = observer((props:IPageTablePanelProps) => {
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

export default TabPanel