import React from "react";
import { FlexWrapper } from "../../Wrappers/FlexWrapper";
import { LayoutWrapper } from "../../Wrappers/LayoutWrapper";
import HomeTitle from "./components/HomeTitle";

const Home = ({ children }) => {
  return (
    <LayoutWrapper width="100%" height="100%">
      <FlexWrapper
        width="100%"
        height="50%"
        direction="column"
        alignItems="center"
        justifyContent="space-evenly"
      >
        <HomeTitle />
        <FlexWrapper
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          height="25%"
          width="30%"
        >
          {children}
        </FlexWrapper>
      </FlexWrapper>
    </LayoutWrapper>
  );
};

export default Home;
