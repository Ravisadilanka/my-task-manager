import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Button, Typography } from "antd";
import LayoutComponent from "@/components/Layout";
import TaskList from "@/components/TaskList";

const { Title } = Typography;

export default function Home() {
  return (
    <LayoutComponent>
      <Head>
        <title>My Task Manager</title>
        <meta name="description" content="Task Manager App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{justifyContent: "center", textAlign:'center'}}>
        <Title>Tasks List</Title>
        <TaskList />
      </main>
    </LayoutComponent>
  );
}
