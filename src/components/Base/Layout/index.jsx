import React, { Component } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { PieChartOutlined, DesktopOutlined } from "@ant-design/icons";
const { Header, Content, Footer, Sider } = Layout;

export default class index extends Component {
  state = {
    collapsed: false,
  };
  onCollapse = () => {
    const { collapsed } = this.state;
    this.setState({ collapsed: !collapsed });
  };
  render() {
    const { collapsed } = this.state;
    const { content } = this.props;
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              TodoList 简单版本
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              TodoList Redux版本
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              {content}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            lucklcy's React Test Project;
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
