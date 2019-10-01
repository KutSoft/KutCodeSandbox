import React from "react";
import ReactDOM from "react-dom";
//import AppSidebar from "components/Sidebar";
//import AppSidebar from "./components/AppSidebar.js";
//import Menu from "./components/Menu.js";
//import Timer from "./components/Timer.js";
import AppView from "./components/AppView.js";

//ReactDOM.render(<AppSidebar />, document.getElementById("sidebar"));
//ReactDOM.render(<Menu />, document.getElementById("menu"));

//--> Internationalization libs
import { I18nextProvider } from "react-i18next";
import i18n from "./components/i18n/i18n.js";

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <AppView />
  </I18nextProvider>,
  document.getElementById("root")
);
