import { SettingOutlined, EditOutlined, EllipsisOutlined } from "@ant-design/icons"
import { Row, Col, Card, Avatar } from "antd"
import Meta from "antd/lib/card/Meta"
import React, { memo } from "react"
import { IApp } from "../model"
import AppCard from "./AppCard"

const AppList = memo((props: {
  apps: IApp[]
}) => {
  const { apps } = props
  return (
    <div className="content-show-block">
      <Row gutter={[24, 24]}>
        {
          apps.map((app) => {
            return (
              <Col span={6} key={app.uuid}>
                <AppCard />
              </Col>
            )
          })
        }
      </Row>
    </div>
  )
})

export default AppList