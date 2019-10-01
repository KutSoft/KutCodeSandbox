import React from "react";
import PropTypes from "prop-types";
import MaterialTitlePanel from "./MaterialTitlePanel.js";
import SidebarMenuItemsData from "../data/SIDEBAR_MENU.json";

const styles = {
  sidebar: {
    width: 256,
    height: "100%"
  },
  sidebarLink: {
    display: "block",
    padding: "16px 0px",
    color: "#757575",
    textDecoration: "none"
  },
  divider: {
    margin: "8px 0",
    height: 1,
    backgroundColor: "#757575"
  },
  content: {
    padding: "16px",
    height: "100%",
    backgroundColor: "white"
  }
};

const SidebarContent = props => {
  const style = props.style
    ? { ...styles.sidebar, ...props.style }
    : styles.sidebar;

  const links = [];

  //--> Sidebar menu loaded from JSON file
  for (let ind = 0; ind < SidebarMenuItemsData.length; ind++) {
    links.push(
      <a
        key={SidebarMenuItemsData[ind].KEY}
        href="#"
        style={styles.sidebarLink}
      >
        {ind + 1}) {SidebarMenuItemsData[ind].TEXT}
      </a>
    );
  }

  return (
    <MaterialTitlePanel title="Menu" style={style}>
      <div style={styles.content}>
        <a href="index.html" style={styles.sidebarLink}>
          Home
        </a>
        <a href="responsive_example.html" style={styles.sidebarLink}>
          Responsive Example
        </a>
        <div style={styles.divider} />
        {links}
      </div>
    </MaterialTitlePanel>
  );
};

SidebarContent.propTypes = {
  style: PropTypes.object
};

export default SidebarContent;
