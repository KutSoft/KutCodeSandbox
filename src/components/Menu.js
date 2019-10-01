import React, { Component } from "react";
import menu from "./Menu.css";
import MenuData from "../data/MENU.json";
import i18n from "./i18n/i18n.js";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MENU: MenuData
    };
  }

  render() {
    return (
      <div className="menu">
        <ul>
          <li>
            <a href="/index.html">{i18n.t("home")}</a>
          </li>
          <li>
            <a href="/products/product-1.html">{i18n.t("models")}</a>
          </li>
          <li>
            <a href="/contact.html">{i18n.t("planning")}</a>
          </li>
        </ul>
      </div>
    );
  }
}
