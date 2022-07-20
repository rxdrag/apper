import { UserOutlined } from "@ant-design/icons"
import { Avatar } from "antd"
import React from "react"

const AvatarMenu = ()=>{
  return (
    <Avatar src="https://joeschmoe.io/api/v1/random" icon={<UserOutlined />} />
  )
}

export default AvatarMenu