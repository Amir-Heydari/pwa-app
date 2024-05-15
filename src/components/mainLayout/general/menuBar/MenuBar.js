import React from 'react';
import { TabBar } from 'antd-mobile';
import { AppOutline, MessageOutline, UnorderedListOutline, UserOutline, } from 'antd-mobile-icons';
import { BrowserRouter, Route, Routes, useNavigate, useLocation, MemoryRouter as Router } from 'react-router-dom';

import './MenuBar.css'
function MenuBar() {

  const navigate = useNavigate()
  const location = useLocation()
  const { pathname } = location


  const setRouteActive = (value) => {
    navigate(value)
  }

  const tabs = [
    {
      key: '/home',
      title: 'Home',
      icon: <AppOutline />,
    },
    {
      key: '/todo',
      title: 'Todo',
      icon: <UnorderedListOutline />,
    },
    {
      key: '/message',
      title: 'Message',
      icon: <MessageOutline />,
    },
    {
      key: '/me',
      title: 'Me',
      icon: <UserOutline />,
    },
  ]


  return (
    <TabBar
      activeKey={pathname}
      onChange={value => setRouteActive(value)}>
      {tabs.map(item => (
        <TabBar.Item
          key={item.key}
          icon={item.icon}
          title={item.title}
        />
      ))}
    </TabBar>
  )
}

export default MenuBar
