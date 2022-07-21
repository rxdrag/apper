import { SettingOutlined, EditOutlined, EllipsisOutlined } from "@ant-design/icons"
import { Row, Col, Card, Avatar } from "antd"
import Meta from "antd/lib/card/Meta"
import React from "react"
import AppCard from "./AppCard"

const AppList = () => {
  return (
    <div className="content-show-block">
      <Row gutter={[24, 24]}>
        <Col span={6}>
          <AppCard />
        </Col>
        <Col span={6}>
          <Card
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              title="Card title"
              description="This is the description"
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={6}>
          <AppCard />
        </Col>
        <Col span={6}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default AppList