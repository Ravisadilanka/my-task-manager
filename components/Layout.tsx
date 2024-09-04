import React from "react";
import { Flex, Layout, Menu } from "antd";
import { HomeOutlined, FileAddOutlined } from "@ant-design/icons";
import "antd/dist/reset.css";
import Link from "next/link";
import { Typography } from "antd";

const { Title } = Typography;

const { Header, Content } = Layout;

const LayoutComponent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]} style={{display: "flex", justifyContent: "space-between"}}>
          <div style={{display: "flex", alignItems:"center"}}>
            <Title level={3} style={{ color: "white"}}>
              My Task Manager
            </Title>
          </div>
          <div>
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link href="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<FileAddOutlined />}>
              <Link href="/add-task">Add Tasks</Link>
            </Menu.Item>
          </div>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px", height: "100vh" }}>
        <div className="site-layout-content">{children}</div>
      </Content>
    </Layout>
  );
};

export default LayoutComponent;
