import { ToolOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import React, { memo, useCallback, useState } from 'react';
import { MaterialModuleTable } from './MaterialModuleTable';
import {TextWidget} from "@designable/react"

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  index: number;
}

export const MaterialModal = memo(() => {
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


  return (
    <>
      <Button shape="circle" style={{ border: 0 }} onClick={showModal}
        icon={<ToolOutlined style={{ fontSize: 14, transform: "rotateY(180deg)" }} />}
      />

      <Modal
        title={<TextWidget>materials.ModuleList</TextWidget>}
        className='material-module-modal'
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <MaterialModuleTable />
      </Modal>
    </>
  );
})