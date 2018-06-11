import React from 'react';
import { Icon, Menu } from 'antd';
import { withRouter } from 'react-router-dom';

const TopNavFunction = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="mail">
        <Icon type="rocket" />Landing
      </Menu.Item>
      <Menu.Item key="app">
        <a onClick={() => console.log('onClick onclick log out')}>
          <Icon type="user" />Profile
        </a>
      </Menu.Item>
    </Menu>
  );
};
export const TopNav = withRouter(TopNavFunction);
