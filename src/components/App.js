import React from "react";
import GlobalStyle from "../config/GlobalStyle";
import { AppWrapper } from "./App.styled";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import Toast from "./Toast/Toast";

const App = () => {
  return (
    <>
      <AppWrapper>
        <GlobalStyle />
        <Main />
        <Footer />
        <Toast />
      </AppWrapper>
    </>
  );
};

export default App;
