import React, { useState, memo } from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  UnorderedListOutlined,
  OrderedListOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

const CustomMenu = () => {
  const [current, setCurrent] = useState("home");

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link to="/">Home</Link>
      </Menu.Item>
      <SubMenu
        key="taskList"
        icon={<OrderedListOutlined />}
        title="Gestion des tâches"
      >
        <Menu.Item key="taskListHome">
          <Link to="/taskList/gestion-des-tâches">Accueil</Link>
        </Menu.Item>
        <Menu.Item key="tasks">
          <Link to="/taskList/information/list">Liste des tâches</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key="actionHistory"
        icon={<UnorderedListOutlined />}
        title="Historique des actions"
      >
        <Menu.Item key="actionHistoryHome">
          <Link to="/actionHistory/historique-des-actions">Accueil</Link>
        </Menu.Item>
        <Menu.Item key="actionHistoryList">
          <Link to="/actionHistory/information/list">
            historique des actions
          </Link>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default memo(CustomMenu);
