import { Button, Tabs } from "antd"
import React from "react"
import { MaterialSearchWidget } from "./MaterialSearchWidget";
import "./index.less"
import {
  ResourceWidget
} from '@designable/react'
import { ToolOutlined } from "@ant-design/icons";
import { allMaterials } from "./mock";
import { MaterialModal } from "./MaterialModal";

const { TabPane } = Tabs;

export const MaterialPanel: React.FC = () => {
  const onChange = (key: string) => {
    console.log(key);
  };
  return (
    <div className="rx-material-panel">
      <MaterialSearchWidget />
      <Tabs defaultActiveKey="1"
        animated
        size="small"
        className="materail-tabs"
        tabBarExtraContent={
          <MaterialModal />
        }
        onChange={onChange}
      >
        {
          allMaterials.map((tabData, index) => {
            return (
              <TabPane tab={tabData.title} key={index + 1}>
                {
                  tabData.groups?.map((groupData, gIndex) => {
                    return (<ResourceWidget
                      key={gIndex + 1}
                      title={groupData.title}
                      sources={groupData.materials.map(material => material.component)}
                    />)
                  })
                }

              </TabPane>
            )
          })
        }
      </Tabs>
    </div>
  )
}