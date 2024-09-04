import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Button, Typography } from "antd";
import { Color } from "antd/es/color-picker";

const { Title } = Typography;

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>My Task Manager</title>
        <meta name="description" content="task Manager App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Title level={3} style={{color:'red'}}>My Task Manager</Title>
        <Button type="dashed">+</Button>
      </main>
    </>
  );
}
