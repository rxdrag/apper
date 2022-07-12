import { DroppableWidget } from "@designable/react"
import { observer } from "@formily/react"
import React from "react"
import './locales'
import './schema'
import '../index.less'
export interface IPageHeaderExtraProps{
  children?:React.ReactNode
}

const HeaderExtra = observer((props) => {
  return (
    <div className="apper-extra">
      <DroppableWidget
        {...props}
        style={{
          ...props['style'],
          display: "flex",
          alignItems: "center",
          flex: 1,
        }}
      >
        {props.children}
      </DroppableWidget>
    </div>
  )
})

export default HeaderExtra