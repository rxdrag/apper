import { CloudUploadOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, message, Modal, Radio, RadioChangeEvent, Upload, UploadProps } from 'antd';
import React, { memo, useCallback, useState } from 'react';
import { TextWidget } from "@designable/react"
import Dragger from 'antd/lib/upload/Dragger';
import { MaterialModule, OperationType } from './model';

export interface IUploadModalProps {
  onAdded: (module: MaterialModule) => void
}

export const UploadModal: React.FC<IUploadModalProps> = memo((props: IUploadModalProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [operationType, setOperationType] = useState(OperationType.Upload)
  const [form] = Form.useForm<MaterialModule>();

  const showModal = useCallback(() => {
    setIsModalVisible(true);
  }, []);

  const handleOk = useCallback(() => {
    form.validateFields().then((obj) => {
      console.log(obj)
    }).catch((err) => {
      console.error("form validate error", err);
    });

    //setIsModalVisible(false);
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
    setOperationType(e.target.value)
  }, []);

  const uploadProps: UploadProps = {
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
        okText={<TextWidget>Confirm</TextWidget>}
        cancelText={<TextWidget>Cancel</TextWidget>}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 12 }}
          initialValues={
            {
              name: "",
              url: "",
              operationType: OperationType.Upload
            }
          }
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label={<TextWidget>materials.ComponentTypeName</TextWidget>}
            name="name"
            rules={[{ required: true, message: <TextWidget>materials.RequiredName</TextWidget> }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label={<TextWidget>materials.OperationType</TextWidget>}
            name="operationType"
          >
            <Radio.Group
              onChange={onTypeChange}
            >
              <Radio value={OperationType.Upload}><TextWidget>materials.Upload</TextWidget></Radio>
              <Radio value={OperationType.Debug}><TextWidget>materials.Debug</TextWidget></Radio>
            </Radio.Group>
          </Form.Item>
          {
            operationType === OperationType.Upload &&
            < Form.Item
              label={<TextWidget>materials.UploadFile</TextWidget>}
              name="file"
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
          }
          {
            operationType === OperationType.Debug &&
            <Form.Item
              label={<TextWidget>materials.LinkAddress</TextWidget>}
              name="url"
              rules={[{ required: true, message: <TextWidget>materials.RequiredUrl</TextWidget> }]}
            >
              <Input />
            </Form.Item>
          }

        </Form>
      </Modal>
    </>
  );
})