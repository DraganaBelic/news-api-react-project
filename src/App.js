import React from "react";
import Header from "./components/header/Header";
import RouterComponent from "./router/RouterComponent";
import MainWrapper from "./components/mainWrapper/MainWrapper";
import { ContentWrapper } from "./components/mainWrapper/MainWrapperStyle";

function App() {
  return (
    <MainWrapper>
      <Header />
      <ContentWrapper>
        <RouterComponent />
      </ContentWrapper>
    </MainWrapper>
  );
}

export default App;
