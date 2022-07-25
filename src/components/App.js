import React from "react";
import GlobalStyle from "../config/GlobalStyle";
import { AppWrapper } from "./App.styled";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

const App = () => {
  return (
    <>
      <AppWrapper>
        <GlobalStyle />
        <Main />
        <Footer />
      </AppWrapper>
    </>
  );
};

export default App;
