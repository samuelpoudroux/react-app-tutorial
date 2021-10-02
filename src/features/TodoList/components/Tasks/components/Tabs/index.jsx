import React, { memo } from "react";
import { FlexWrapper } from "../../../../../../Wrappers/FlexWrapper";
import { Tabs } from "antd";
import TaskCard from "../TaskCard";

import PropTypes from "prop-types";
const { TabPane } = Tabs;

const TaskTabs = ({ tasks }) => {
  return (
    <Tabs defaultActiveKey="1" style={{ width: "100%" }}>
      <TabPane tab="Toutes" key="1">
        <FlexWrapper justifyContent="center" width="100%">
          {tasks?.map((task, index) => (
            <TaskCard task={task} key={index} />
          ))}
        </FlexWrapper>{" "}
      </TabPane>
      <TabPane tab="faites" key="2">
        <FlexWrapper justifyContent="center">
          {tasks
            ?.filter((t) => t.isChecked)
            .map((task, index) => (
              <TaskCard task={task} key={`checked${index}`} />
            ))}
        </FlexWrapper>{" "}
      </TabPane>
      <TabPane tab="à faire" key="3">
        <FlexWrapper justifyContent="center">
          {tasks
            ?.filter((t) => !t.isChecked)
            .map((task, index) => (
              <TaskCard task={task} key={`notChecked${index}`} />
            ))}
        </FlexWrapper>{" "}
      </TabPane>
    </Tabs>
  );
};

TaskTabs.propTypes = {
  tasks: PropTypes.array,
};

export default memo(TaskTabs);
