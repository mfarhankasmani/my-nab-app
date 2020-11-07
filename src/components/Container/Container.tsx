import React from "react";
import "./Container.css";

const Container: React.FunctionComponent = ({ children }) => {
  return (
    <div className="container">
      <div className="container__margin"></div>
      <div className="container__body">{children}</div>
      <div className="container__margin"></div>
    </div>
  );
};

export default Container;
