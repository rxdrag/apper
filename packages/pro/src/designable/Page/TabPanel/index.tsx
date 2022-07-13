import { DroppableWidget } from "@designable/react"
import { observer } from "@formily/react"
import PageTabPanel, { IPageTabPanelProps } from "../../../executable/Page/PageTabPanel"
import React from "react"
import './locales'
import './schema'

const TabPanel = observer((props: IPageTabPanelProps) => {
  return (
    <DroppableWidget>
      <PageTabPanel {...props}>
        {props.children}
      </PageTabPanel>
    </DroppableWidget>

  )
})

export default TabPanel