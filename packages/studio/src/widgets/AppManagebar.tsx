import { ImportOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Input, Space } from "antd";
import React from "react";

const AppManagebar = ()=>{
  return (
    <div className="app-manage-bar">
      <Space>
        <Button type="primary" icon={<PlusOutlined />}>创建应用</Button>
        <Button type="primary" icon={<ImportOutlined />}>导入应用</Button>
      </Space>
      <Input allowClear size="middle"className="search" />
    </div>
  )
}

export default AppManagebar;