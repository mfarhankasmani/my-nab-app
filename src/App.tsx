import React from "react";
import "./App.css";
import { Login, Home } from "./components";
import { useSelector } from "react-redux";
import { IState } from "./store/types";

function App() {
  const isLogin = useSelector((state: IState) => state.isLogin);

  return (
    <div className="app">
      {!isLogin && <Login />}
      {isLogin && <Home />}
    </div>
  );
}

export default App;
