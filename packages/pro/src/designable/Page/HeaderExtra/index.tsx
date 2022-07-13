import { DroppableWidget } from "@designable/react"
import { observer } from "@formily/react"
import PageHeaderExtra from "../../../executable/Page/PageHeaderExtra"
import React from "react"
import './locales'
import './schema'
import { IPageHeaderExtraProps } from './../../../executable/Page/PageHeaderExtra';

const HeaderExtra = observer((props:IPageHeaderExtraProps) => {
  return (
    <DroppableWidget>
      <PageHeaderExtra {...props}>
        {props.children}
      </PageHeaderExtra>
    </DroppableWidget>
  )
})

export default HeaderExtra