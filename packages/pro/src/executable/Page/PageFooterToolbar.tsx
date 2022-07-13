import { observer } from "@formily/reactive-react"
import React from "react"

export interface IPageFooterToolbarProps {
  children?: React.ReactNode
}

const PageFooterToolbar = observer((props: IPageFooterToolbarProps) => {
  return (
    <div className="rx-page-footer-toolbar">
      {props.children}
    </div>
  )
})

export default PageFooterToolbar