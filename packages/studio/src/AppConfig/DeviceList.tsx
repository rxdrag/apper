import React from "react"
import { memo } from "react"

const DeviceList = memo(() => {
  return (
    <div className="content-show-block">
      <div className="config-content">
        <h2>应用设计</h2>
        <a href="/design-app/xxx">设计Admin</a>
      </div>
    </div>
  )
})

export default DeviceList