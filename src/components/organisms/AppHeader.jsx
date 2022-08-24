import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

export default function AppHeader(props) {
  return (
    <div className="app-header">
      <div className="app-header__logo">
        <Link to="/">
          <img src={logo} className="responsive" alt="" />
        </Link>
      </div>
      <div className="app-header__menu">
        <i className="fa fa-bars" onClick={() => props.setOpen(true)}></i>
      </div>
    </div>
  );
}
