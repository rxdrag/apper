import { DroppableWidget } from "@designable/react"
import { observer } from "@formily/react"
import PageContent, { IPageContentProps } from "../../../executable/Page/PageContent"
import React, { Fragment } from "react"
import './locales'
import './schema'

const Content = observer((props:IPageContentProps) => {
  return (
    <DroppableWidget>
      <PageContent  {...props}>
        {props.children}
      </PageContent>
    </DroppableWidget>
  )
})

export default Content