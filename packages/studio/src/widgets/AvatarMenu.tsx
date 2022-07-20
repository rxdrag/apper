import { UserOutlined } from "@ant-design/icons"
import { Avatar, Space } from "antd"
import React from "react"

const AvatarMenu = () => {
  return (
    <Avatar className="avatar" src="https://joeschmoe.io/api/v1/random" icon={<UserOutlined />} />
  )
}

export default AvatarMenu