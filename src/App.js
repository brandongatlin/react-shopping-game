import React from "react";
import "./App.css";

import Header from "./components/header";

import ClickBox from "./components/containers/click_box";

const App = () => {
  return (
    <div className='App'>
      <Header />
      <ClickBox />
    </div>
  );
};

export default App;
