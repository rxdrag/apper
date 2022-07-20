import { SettingOutlined, EditOutlined, EllipsisOutlined, SendOutlined, DeleteOutlined, DownloadOutlined } from "@ant-design/icons"
import { Card, Dropdown, Menu } from "antd"
import Meta from "antd/lib/card/Meta"
import React, { memo, useCallback } from "react"
import {useNavigate} from "react-router-dom"

const menu = (
  <Menu>
    <Menu.Item key="settings"
      icon={<SettingOutlined />}
    >
      设置
    </Menu.Item>
    <Menu.Item key="remove" icon={<DeleteOutlined />}>
      删除
    </Menu.Item>
  </Menu>
);

const AppCard = memo(() => {
  const navigate = useNavigate();
  const handleEdit = useCallback(()=>{
    navigate("/config-app/xxx")
    //window.open("/config-app/xxx")
  }, [navigate])
  
  return (
    <Card
      className="hover-float app-card"
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <SendOutlined key="view" />,
        <EditOutlined key="edit" onClick={handleEdit} />,
        <DownloadOutlined key="download" />,
        <Dropdown overlay={menu} placement="bottomRight" arrow trigger={['click']}>
          <EllipsisOutlined key="ellipsis" />
        </Dropdown>,
      ]}

    >
      <Meta
        title="Card title"
        description="This is the description, This is the description, This is the description, "
      />
    </Card>
  )
})

export default AppCard;
