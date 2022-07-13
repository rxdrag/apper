import { DroppableWidget } from "@designable/react"
import { observer } from "@formily/react"
import PageFooterToolbar, { IPageFooterToolbarProps } from "../../../executable/Page/PageFooterToolbar"
import React, { Fragment } from "react"
import './locales'
import './schema'


const FooterToolbar = observer((props: IPageFooterToolbarProps) => {
  return (
    <DroppableWidget>
      <PageFooterToolbar {...props}>
        {props.children}
      </PageFooterToolbar>
    </DroppableWidget>
  )
})

export default FooterToolbar