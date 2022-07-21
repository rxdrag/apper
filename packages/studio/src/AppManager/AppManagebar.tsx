import { ImportOutlined, InfoCircleOutlined, PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space } from "antd";
import React from "react";
import CreateDialog from "./CreateDialog";

const { Search } = Input;

const AppManagebar = () => {
  return (
    <div className="app-manage-bar">
      <Input
        className="search hover-float"
        placeholder="请输入应用名称或关键字"
        suffix={
          <SearchOutlined className="search-icon"  />
        }
      />
      <Space className="actions">
        <Button className="hover-float" icon={<ImportOutlined />}>导入应用</Button>
        <CreateDialog />
      </Space>
    </div>
  )
}

export default AppManagebar;