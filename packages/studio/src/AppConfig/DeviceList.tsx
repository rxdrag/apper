import { Row, Col, Card, Button, Skeleton } from "antd"
import Meta from "antd/lib/card/Meta"
import React, { useMemo } from "react"
import { memo } from "react"
import { getMessage } from "../AppDesigner/widgets"
import { IApp, IDevice } from "../model"

const DeviceList = memo((props: {
  loading?: boolean,
  app?: IApp
}) => {
  const { loading, app } = props;
  const list: IDevice[] = useMemo(() => [
    {
      id: "1",
      slug: "pc",
      title: getMessage("appManager.PCDesign"),
      image: {
        id: "1",
        thumbUrl: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      }
    },
    {
      id: "2",
      slug: "h5",
      title: getMessage("appManager.H5Design"),
      image: {
        id: "2",
        thumbUrl: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      }
    },
    {
      id: "3",
      slug: "admin",
      title: getMessage("appManager.AdminDesign"),
      image: {
        id: "3",
        thumbUrl: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      }
    },
  ], [])

  return (
    <div className="content-show-block">
      <div className="config-content">
        <h2>{getMessage("appManager.AppDesign")}</h2>
        {
          loading ?
            <Skeleton active={true}></Skeleton>
            :
            <Row className="app-row" gutter={24}>
              {
                list.map(device => {
                  return (
                    <Col span={6}>
                      <Card
                        cover={
                          <img
                            alt="example"
                            src={device.image?.thumbUrl}
                          />
                        }
                        actions={[
                          <Button
                            key="design"
                            shape="round"
                            type="primary"
                            href={`/design-app/${device.slug}/${app?.id}`}
                          >
                            {getMessage("appManager.ToDesign")}
                          </Button>,
                          <Button key="preview" shape="round" >{getMessage("appManager.ToPreview")}</Button>,
                        ]}
                      >
                        <Meta
                          title={device.title}
                        />
                      </Card>
                    </Col>
                  )
                })
              }
            </Row>
        }
      </div>
    </div>
  )
})

export default DeviceList