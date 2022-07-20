import { ImportOutlined, InfoCircleOutlined, PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space } from "antd";
import React from "react";

const { Search } = Input;

const AppManagebar = () => {
  return (
    <div className="app-manage-bar">
      <Input
        className="search"
        placeholder="请输入应用名称或关键字"
        suffix={
          <SearchOutlined className="search-icon"  />
        }
      />
      <Space className="actions">
        <Button icon={<ImportOutlined />}>导入应用</Button>
        <Button type="primary" icon={<PlusOutlined />}>创建应用</Button>
      </Space>
    </div>
  )
}

export default AppManagebar;