import { CloudUploadOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, message, Modal, Radio, RadioChangeEvent, Upload, UploadProps } from 'antd';
import React, { memo, useCallback, useState } from 'react';
import { TextWidget } from "@designable/react"
import Dragger from 'antd/lib/upload/Dragger';

export const UploadModal = memo(() => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = useCallback(() => {
    setIsModalVisible(true);
  }, []);

  const handleOk = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  const handleCancel = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  const onFinish = useCallback((values: any) => {
    console.log('Success:', values);
  }, []);

  const onFinishFailed = useCallback((errorInfo: any) => {
    console.log('Failed:', errorInfo);
  }, []);

  const onTypeChange = useCallback((e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    //setValue(e.target.value);
  }, []);

  const props: UploadProps = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    style: {
      border: 0
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <>
      <Button
        type="dashed"
        className='material-module-add-button'
        icon={<PlusOutlined />}
        onClick={showModal}
      >
        <TextWidget>materials.Add</TextWidget>
      </Button>
      <Modal
        title={<TextWidget>materials.Cuszomized</TextWidget>}
        className='material-upoad-modal'
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="确定"
        cancelText="取消"
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 12 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="组件类型名称"
            name="name"
            rules={[{ required: true, message: 'Please input material name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="操作类型"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Radio.Group
              onChange={onTypeChange}
            //value={value}
            >
              <Radio value={1}>上传</Radio>
              <Radio value={2}>调试</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="上传文件"
            name="file"
          >
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <CloudUploadOutlined />
              </p>
              <p className="ant-upload-hint">将文件拖拽到此处，或<a>点击上传</a></p>
            </Dragger>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
})