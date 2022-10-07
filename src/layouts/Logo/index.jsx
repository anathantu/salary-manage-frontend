import React from "react";
import logo from "../../assets/images/logo.jpg";
import "./index.css";
const Logo = () => {
  return (
    <div className="logo" >
      <img src={logo} className="img-logo" alt="logo" />
      <h1 className="sidebar-title">薪酬管理系统</h1>
    </div>
  );
};

export default Logo;
