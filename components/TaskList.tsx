import React from 'react';
import { Button, Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { EditTwoTone, DeleteTwoTone } from "@ant-design/icons";

interface DataType {
    key: string;
    task: string;
    category: string;
    priority: string;
    date: string;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Task',
    dataIndex: 'task',
    key: 'task',
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Category",
      dataIndex: "category",
      key: "category",
  },
  {
    title: "Priority",
      dataIndex: "priority",
      key: "priority",
      render: (text) => (
        <span style={{color: text === 'High' ? 'red' : text === 'Normal' ? 'green' : 'blue'}}>{text}</span>
      ),
      showSorterTooltip: { target: 'full-header' },
    filters: [
      {
        text: 'High',
        value: 'High',
      },
      {
        text: 'Normal',
        value: 'Normal',
      },
      {
        text: 'Low',
        value: 'Low',
      }]
  },
  {
    title: "Date",
      dataIndex: "date",
      key: "date",
  },
  {
    title: "Actions",
    key: "actions",
    render: (_, record) => (
      <Space size="middle">
        <Button>
          <EditTwoTone />
        </Button>
        <Button danger>
          <DeleteTwoTone twoToneColor="red" />
        </Button>
      </Space>
    ),
  },
];

const data: DataType[] = [
    {
        key: "1",
        task: "Complete React project",
        category: "Category 01",
        priority: "High",
        date: "2024-09-10",
      },
      {
        key: "2",
        task: "Prepare presentation slides",
        category: "Category 02",
        priority: "Normal",
        date: "2024-09-12",
      },
      {
        key: "3",
        task: "Update project documentation",
        category: "Category 03",
        priority: "Low",
        date: "2024-09-15",
      },
];

const App: React.FC = () => <Table columns={columns} dataSource={data} />;

export default App;