import React, { useState } from 'react';
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  Select,
} from 'antd';

type SizeType = Parameters<typeof Form>[0]['size'];

const TaskForm: React.FC = () => {
  const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  return (
    <Form
      labelCol={{ span: 7}}
      wrapperCol={{ span: 14}}
      layout="horizontal"
      initialValues={{ size: componentSize }}
      onValuesChange={onFormLayoutChange}
      size={componentSize as SizeType}
      style={{ maxWidth: 1200, margin: 0}}
    >
      <Form.Item label="Task">
        <Input style={{textAlign:'center'}}/>
      </Form.Item>
      <Form.Item label="Category">
        <Select style={{justifyContent:"left"}}>
          <Select.Option value="category01">Category 01</Select.Option>
          <Select.Option value="category02">Category 02</Select.Option>
          <Select.Option value="category03">Category 03</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Priority Level">
        <Cascader
          options={[
            {
              value: 'high',
              label: <span style={{ color: 'red' }}>High</span>,
            },
            {
              value: 'normal',
              label: <span style={{ color: 'green' }}>Normal</span>,
            },
            {
              value: 'low',
              label: <span style={{ color: 'blue' }}>Low</span>,
            },
          ]}
        />
      </Form.Item>
      <Form.Item label="Date">
        <DatePicker />
      </Form.Item>
      <Form.Item>
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
  );
};

export default TaskForm;