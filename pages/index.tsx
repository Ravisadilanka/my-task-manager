import Head from "next/head";
import { Typography } from "antd";
import LayoutComponent from "@/components/Layout";
import TaskList from "@/components/TaskList";
import TaskForm from "@/components/TaskForm";  // Import TaskForm component
import { useState } from "react";

const { Title } = Typography;

interface Task {
  key: string;
  task: string;
  category: string;
  priority: string;
  date: string;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
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
        
        {/* Use TaskForm and pass the addTask function */}
        <TaskForm onAddTask={addTask} />

        {/* Pass tasks as props to TaskList */}
        <TaskList tasks={tasks} setTasks={setTasks}/>
      </main>
    </LayoutComponent>
  );
}
