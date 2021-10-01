import React from "react";
import { FlexWrapper } from "../../Wrappers/FlexWrapper";
import { LayoutWrapper } from "../../Wrappers/LayoutWrapper";
import HomeTitle from "./components/HomeTitle";

const Home = ({ children, isMainHome }) => {
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
          {isMainHome ? (
            <img src="/assets/kisspng-web-development-php-software-developer-programmer-computer-user-icon-svg-5ab0fde96b26b1.0935145915215487774389.png" />
          ) : (
            children
          )}
        </FlexWrapper>
      </FlexWrapper>
    </LayoutWrapper>
  );
};

export default Home;
