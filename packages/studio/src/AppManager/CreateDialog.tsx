import { CloudUploadOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, UploadProps, Form, Input, Modal, message } from 'antd';
import Dragger from 'antd/lib/upload/Dragger';
import React, { memo, useState } from 'react';
import { TextWidget } from '../AppDesigner/widgets';

const CreateDialog = memo(() => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const uploadProps: UploadProps = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
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

  const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  return (
    <>
      <Button
        className="hover-float"
        type="primary"
        icon={<PlusOutlined />}
        onClick={showModal}
      >
        创建应用
      </Button>
      <Modal
        title="创建应用"
        okText={<TextWidget>Confirm</TextWidget>}
        cancelText={<TextWidget>Cancel</TextWidget>}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name="createApp"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="应用名称"
            name="name"
            rules={[{ required: true, message: 'Please input your app name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="描述"
            name="description"
          >
            <Input.TextArea />
          </Form.Item>

          < Form.Item
            label={"图片"}
            name="image"
            valuePropName="fileList"
            // 如果没有下面这一句会报错
            getValueFromEvent={normFile}
          >
            <Dragger {...uploadProps}>
              <p className="ant-upload-drag-icon">
                <CloudUploadOutlined />
              </p>
              <p className="ant-upload-hint">
                <TextWidget>materials.UploadHint1</TextWidget>
                <a><TextWidget>materials.UploadHint2</TextWidget></a>
              </p>
            </Dragger>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
});

export default CreateDialog;