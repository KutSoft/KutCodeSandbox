import React from "react";
import Sidebar from "react-sidebar";
import MaterialTitlePanel from "./MaterialTitlePanel.js";
import SidebarContent from "./SidebarContent.js";
import Menu from "./Menu.js";
import CssStyles from "./AppSidebar.css";

const styles = {
  contentHeaderMenuLink: {
    textDecoration: "none",
    color: "white",
    padding: 8
  },
  content: {
    padding: "16px",
    backgroundcolor: "red"
  }
};

const mql = window.matchMedia(`(min-width: 800px)`);

export default class AppSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      docked: mql.matches,
      open: false
    };

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
    this.onSetOpen = this.onSetOpen.bind(this);
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged);
  }

  onSetOpen(open) {
    this.setState({ open });
  }

  mediaQueryChanged() {
    this.setState({
      docked: mql.matches,
      open: false
    });
  }

  toggleOpen(ev) {
    this.setState({ open: !this.state.open });

    if (ev) {
      ev.preventDefault();
    }
  }

  render() {
    const sidebar = <SidebarContent />;

    //<span> Responsive React Sidebar</span>
    const contentHeader = (
      <span className="sidebar-block-div">
        {/* <div className="sidebar-menu-row"> */}
        <div className="sidebar-block-div-n">
          {!this.state.docked && (
            <a
              onClick={this.toggleOpen}
              o
              href="#"
              className="bigblue"
              style={CssStyles.bigblue}
            >
              =
            </a>
          )}
        </div>
        {/* <Menu />
        {/* </div> */}
        <Menu />
      </span>
    );

    const sidebarProps = {
      sidebar,
      sidebarClassName: "custom-sidebar-class",
      docked: this.state.docked,
      open: this.state.open,
      onSetOpen: this.onSetOpen
    };

    return (
      <Sidebar {...sidebarProps}>
        <MaterialTitlePanel title={contentHeader}>
          <div style={styles.content}>
            <p>
              This example will automatically dock the sidebar if the page width
              is above 800px (which is currently {this.state.docked.toString()}
              ).
            </p>
            <p>
              This functionality should live in the component that renders the
              sidebar. This way you&#39;re able to modify the sidebar and main
              content based on the responsiveness data. For example, the menu
              button in the header of the content is now{" "}
              {this.state.docked ? "hidden" : "shown"} because the sidebar is{" "}
              {!this.state.docked && "not"} visible.
            </p>
          </div>
        </MaterialTitlePanel>
      </Sidebar>
    );
  }
}
