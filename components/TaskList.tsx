import React from "react";
import { Button, Card, List, Space } from "antd";
import { EditTwoTone, DeleteTwoTone } from "@ant-design/icons";

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];

const TaskList: React.FC = () => (
  <List
    style={{ width: "50%", margin: "auto" }}
    size="large"
    bordered
    dataSource={data}
    renderItem={(item) => (
      <List.Item
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ flex: 1 }}>{item}</div>
        <Space size={15}>
          <Button>
            <EditTwoTone />
          </Button>
          <Button danger>
            <DeleteTwoTone twoToneColor="red" />
          </Button>
        </Space>
      </List.Item>
    )}
  />
);

export default TaskList;
