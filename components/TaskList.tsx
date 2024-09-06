import React from 'react';
import { Button, Space, Table } from 'antd';
import type { TableProps } from 'antd';
import { EditTwoTone, DeleteTwoTone } from "@ant-design/icons";

interface DataType {
  key: string;
  task: string;
  category: string;
  priority: string;
  date: string;
}

interface TaskListProps {
  tasks: DataType[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
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
      render: (text: string) => {
        console.log(text); // Check what value is being passed
        return (
          <span style={{ color: text == 'High' ? 'red' : text == 'Normal' ? 'green' : 'blue' }}>
            {text}
          </span>
        );
      },
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
        },
      ],
      onFilter: (value, record) => record.priority.includes(value as string),
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

  const dataWithKeys = tasks.map((task, index) => ({
    ...task,
    key: index.toString(),
  }));

  return <Table columns={columns} dataSource={dataWithKeys} />;
};

export default TaskList;
