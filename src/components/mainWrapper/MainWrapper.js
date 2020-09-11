import React from "react";
import { MainWrapperStyle } from "./MainWrapperStyle";

const MainWrapper = (props) => {
  return <MainWrapperStyle>{props.children}</MainWrapperStyle>;
};

export default MainWrapper;
