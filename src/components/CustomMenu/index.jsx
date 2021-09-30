import React, { useState, memo } from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  UnorderedListOutlined,
  OrderedListOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

const { SubMenu } = Menu;

const CustomMenu = () => {
  const { pathname } = useLocation();

  console.log(pathname);

  return (
    <Menu selectedKeys={[pathname]} mode="horizontal">
      <Menu.Item key="/" icon={<HomeOutlined />}>
        <Link to="/">Home</Link>
      </Menu.Item>
      <SubMenu
        key="taskList"
        icon={<OrderedListOutlined />}
        title="Gestion des tâches"
      >
        <Menu.Item key="/taskList/gestion-des-tâches">
          <Link to="/taskList/gestion-des-tâches">Accueil</Link>
        </Menu.Item>
        <Menu.Item key="/taskList/information/list">
          <Link to="/taskList/information/list">Liste des tâches</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key="/actionHistory/"
        icon={<UnorderedListOutlined />}
        title="Historique des actions"
      >
        <Menu.Item key="/actionHistory/historique-des-actions">
          <Link to="/actionHistory/historique-des-actions">Accueil</Link>
        </Menu.Item>
        <Menu.Item key="/actionHistory/information/list">
          <Link to="/actionHistory/information/list">
            historique des actions
          </Link>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default CustomMenu;
