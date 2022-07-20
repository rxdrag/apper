import { Row, Col, Card } from "antd"
import React from "react"

const AppList = () => {
  return (
    <div className="apps-block">
      <Row className="app-row" gutter={32}>
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
      <Row className="app-row" gutter={32}>
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
      <Row className="app-row"  gutter={32}>
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