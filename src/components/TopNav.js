import React from 'react';
import { Icon, Menu } from 'antd';
import { withRouter } from 'react-router-dom';

const TopNavFunction = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="mail">
        <Icon type="mail" />Navigation One
      </Menu.Item>
      <Menu.Item key="app" disabled>
        <Icon type="appstore" />Navigation Two
      </Menu.Item>
      <Menu.Item key="alipay">
        <a
          onClick={() => {
            console.log('onClick onclick log out');
          }}
        >
          {' '}
          <Icon type="appstore" />
        </a>
      </Menu.Item>
    </Menu>
  );
};
export const TopNav = withRouter(TopNavFunction);
