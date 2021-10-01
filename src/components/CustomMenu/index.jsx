import React, { memo } from "react";
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

  return (
    <Menu selectedKeys={[pathname]} mode="horizontal">
      <Menu.Item key="/" icon={<HomeOutlined />}>
        <Link to="/">Home</Link>
      </Menu.Item>
      <SubMenu
        key="todolist"
        icon={<OrderedListOutlined />}
        title="Gestion des tâches"
      >
        <Menu.Item key="/todolist/gestion-des-tâches">
          <Link to="/todolist/gestion-des-tâches">Accueil</Link>
        </Menu.Item>
        <Menu.Item key="/todolist/information/tasks">
          <Link to="/todolist/information/tasks">Liste des tâches</Link>
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
        <Menu.Item key="/actionHistory/information/tasks">
          <Link to="/actionHistory/information/tasks">
            historique des actions
          </Link>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default memo(CustomMenu);
