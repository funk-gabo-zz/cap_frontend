import { Link } from "react-router-dom";
import { useState } from "react";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";

export const Sidebar = ({ children }) => {
  const { Header, Sider, Content } = Layout;
  const [collapse, setCollapse] = useState(false);
  const handleCollapse = () => {
    setCollapse((prevState) => !prevState);
  };
  return (
    <Layout>
      <Sider collapsed={collapse}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/home">Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link to="/videos">Videos</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {collapse ? (
            <MenuUnfoldOutlined onClick={handleCollapse} className="trigger" />
          ) : (
            <MenuFoldOutlined onClick={handleCollapse} className="trigger" />
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
