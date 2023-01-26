import React from "react";
import LayoutDecoration from "../assets/components/LayoutDecoration";

const Layout = ({ children }) => {
  return (
    <div className="container__layout">
      {children}
      <LayoutDecoration />
    </div>
  );
};

export default Layout;
