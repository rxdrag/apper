import { SettingOutlined, EditOutlined, EllipsisOutlined } from "@ant-design/icons"
import { Row, Col, Card, Button } from "antd"
import Meta from "antd/lib/card/Meta"
import React from "react"
import { memo } from "react"

const DeviceList = memo(() => {
  return (
    <div className="content-show-block">
      <div className="config-content">
        <h2>应用设计</h2>
        <Row className="app-row" gutter={24}>
          <Col span={6}>
            <Card
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <Button key="design" shape="round" type="primary" href="/design-app/xxx">去设计</Button>,
                <Button key="preview" shape="round" >去预览</Button>,
              ]}
            >
              <Meta
                title="PC设计"
              />
            </Card>
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
                <Button key="design" shape="round" type="primary" href="/design-app/xxx">去设计</Button>,
                <Button key="preview" shape="round" >去预览</Button>,
              ]}
            >
              <Meta
                title="H5设计"
              />
            </Card>
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
                <Button key="design" shape="round" type="primary" href="/design-app/xxx">去设计</Button>,
                <Button key="preview" shape="round" >去预览</Button>,
              ]}
            >
              <Meta
                title="管理端设计"
              />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
})

export default DeviceList