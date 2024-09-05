import React from "react";
import { Breadcrumb, Layout, Menu } from "antd";
import { HomeOutlined, FileAddOutlined } from "@ant-design/icons";
import "antd/dist/reset.css";
import Link from "next/link";
import { Typography } from "antd";
import { useRouter } from "next/router";

const { Title } = Typography;
const { Header, Content } = Layout;

const LayoutComponent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();

  const selectedKey = router.pathname === "/" ? "1" : "2";

  return (
    <Layout>
      <Header
        className="header"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="logo">
          <Link href="/">
            <Title level={3} style={{ color: "white", margin: 0 }}>
              My Task Manager
            </Title>
          </Link>
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[selectedKey]}
          style={{ display: "flex", flexGrow: 1, justifyContent: "flex-end" }}
        >
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link href="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<FileAddOutlined />}>
            <Link href="/add-task">Add Tasks</Link>
          </Menu.Item>
        </Menu>
      </Header>

      {/* Breadcrumb */}
      <Breadcrumb style={{ margin: "16px 32px" }}>
        <Breadcrumb.Item>
          <Link href="/">Home</Link>
        </Breadcrumb.Item>
        {router.pathname === "/add-task" && (
          <Breadcrumb.Item>Add Task</Breadcrumb.Item>
        )}
      </Breadcrumb>

      <Content style={{ padding: "0 50px", height: "100vh" }}>
        <div className="site-layout-content">{children}</div>
      </Content>
    </Layout>
  );
};

export default LayoutComponent;
