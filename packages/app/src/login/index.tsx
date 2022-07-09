import React, { useCallback } from 'react'
import { createForm } from '@formily/core'
import { createSchemaField } from '@formily/react'
import { Form, FormItem, Input, Password, Submit } from '@formily/antd'
import { Tabs, Card } from 'antd'
import * as ICONS from '@ant-design/icons'
import { VerifyCode } from './VerifyCode'

const normalForm = createForm({
  validateFirst: true,
})

const phoneForm = createForm({
  validateFirst: true,
})

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    Password,
    VerifyCode,
  },
  scope: {
    icon(name: string) {
      return React.createElement(ICONS[name])
    },
  },
})

const normalSchema = {
  type: 'object',
  properties: {
    username: {
      type: 'string',
      title: '用户名',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {
        prefix: "{{icon('UserOutlined')}}",
      },
    },
    password: {
      type: 'string',
      title: '密码',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Password',
      'x-component-props': {
        prefix: "{{icon('LockOutlined')}}",
      },
    },
  },
}

export default () => {

  const handleSubmit = useCallback((value:any)=>{
    console.log("哈哈", value)
  }, [])

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        background: '#eee',
        alignItems: "center",
        padding: '40px 0',
        height: '100%'
      }}
    >
      <Card style={{ width: 400, height: 360 }} title="登录">
        <Form
          form={normalForm}
          layout="vertical"
          size="large"
          onAutoSubmit={handleSubmit}
        >
          <SchemaField schema={normalSchema} />
          <Submit block size="large">
            登录
          </Submit>
        </Form>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <a href="#新用户注册">新用户注册</a>
          <a href="#忘记密码">忘记密码?</a>
        </div>
      </Card>
    </div>
  )
}