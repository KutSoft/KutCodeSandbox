import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import logo from "../res/img/AppLogo.png";
import "../res/css/AppView.css";

import AppSidebar from "./AppSidebar.js";
import Menu from "./Menu.js";
import AppHeader from "./AppHeader.js";
import AppFooter from "./AppFooter.js";
import HomeView from "./HomeView.js";
import AboutView from "./AboutView.js";

/*
        <!--
        <AppHeader text="Benvenuto nella mia prima applicazione React!" />
        <AppFooter />
        -->
*/
class AppView extends React.Component {
  render() {
    return (
      <div className="AppView">
        <div className="block-div">
          <Menu />
          <AppSidebar />

          {/* <AppFooter /> */}
        </div>

        <header className="App-header">
          {/* <!--<img src={logo} className="App-logo" alt="logo" width="250rem" /> */}
          <h1 className="App-title">Welcome to React!</h1>
        </header>

        {/* Routing directives */}
        <BrowserRouter>
          <div>
            <Route exact path="/" component={HomeView} />
            <Route exact path="/about" component={AboutView} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default AppView;
