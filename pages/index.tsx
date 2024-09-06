import Head from "next/head";
import { Button, Cascader, DatePicker, Form, Input, Select, Typography, message } from "antd";
import LayoutComponent from "@/components/Layout";
import TaskList from "@/components/TaskList";
import { useState } from "react";

const { Title } = Typography;

type SizeType = Parameters<typeof Form>[0]['size'];

interface Task {
  key: string;
  task: string;
  category: string;
  priority: string;
  date: string;
}

export default function Home() {
  const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');
  const [tasks, setTasks] = useState<Task[]>([]);

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  const onFinish = (values: any) => {
    const { task, category, priority, date } = values;
    const formattedDate = date.format('YYYY-MM-DD');
    
    const newTask: Task = { 
      key: Date.now().toString(),
      task, 
      category, 
      priority, 
      date: formattedDate 
    };
    
    setTasks([...tasks, newTask]);
    message.success('Task added successfully!');
    console.log(tasks);
  };

  return (
    <LayoutComponent>
      <Head>
        <title>My Task Manager</title>
        <meta name="description" content="Task Manager App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ justifyContent: "center", textAlign: 'center' }}>
        <Title>Tasks List</Title>
        <Form
          labelCol={{ span: 7 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          initialValues={{ size: componentSize }}
          onValuesChange={onFormLayoutChange}
          size={componentSize as SizeType}
          style={{ maxWidth: 1200, margin: 0 }}
          onFinish={onFinish}
        >
          <Form.Item label="Task" name="task" rules={[{ required: true, message: 'Please input your task!' }]}>
            <Input style={{ textAlign: 'center' }} />
          </Form.Item>
          <Form.Item label="Category" name="category" rules={[{ required: true, message: 'Please select a category!' }]}>
            <Select>
              <Select.Option value="Category 01">Category 01</Select.Option>
              <Select.Option value="Category 02">Category 02</Select.Option>
              <Select.Option value="Category 03">Category 03</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Priority Level" name="priority" rules={[{ required: true, message: 'Please select a priority!' }]}>
            <Cascader
              options={[
                {
                  value: 'High',
                  label: <span style={{ color: 'red' }}>High</span>,
                },
                {
                  value: 'Normal',
                  label: <span style={{ color: 'green' }}>Normal</span>,
                },
                {
                  value: 'Low',
                  label: <span style={{ color: 'blue' }}>Low</span>,
                },
              ]}
            />
          </Form.Item>
          <Form.Item label="Date" name="date" rules={[{ required: true, message: 'Please select a date!' }]}>
            <DatePicker />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>

        <TaskList tasks={tasks} />
      </main>
    </LayoutComponent>
  );
}
