import React from 'react';
import { Icon, Layout, Menu } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

export const Main = () => (
  <Layout>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="2">
          <Icon type="rocket" />
          <span className="nav-text">Landing</span>
        </Menu.Item>
        <Menu.Item key="1">
          <Icon type="user" />
          <span className="nav-text">Profile</span>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header style={{ background: '#fff', padding: 0 }}>Header Content</Header>
      <Content style={{ margin: '24px 16px 0' }}>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          / root body content
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2016 Created by Ant UED
      </Footer>
    </Layout>
  </Layout>
);
