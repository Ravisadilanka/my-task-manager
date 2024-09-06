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
  setTasks: React.Dispatch<React.SetStateAction<DataType[]>>;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, setTasks }) => {

  const deleteTask = (key: string) => {
    const updatedTasks = tasks.filter(task => task.key !== key);
    setTasks(updatedTasks);
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
      render: (text: string) => (
        <span style={{ color: text === 'High' ? 'red' : text === 'Normal' ? 'green' : 'blue' }}>
          {text}
        </span>
      ),
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
      onFilter: (value: string, record: DataType) => record.priority.includes(value),
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record: DataType) => (
        <Space size="middle">
          <Button>
            <EditTwoTone />
          </Button>
          <Button danger onClick={() => deleteTask(record.key)}>
            <DeleteTwoTone twoToneColor="red" />
          </Button>
        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={tasks} rowKey="key" />;
};

export default TaskList;
