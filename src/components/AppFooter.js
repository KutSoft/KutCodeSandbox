import ReactDOM from "react-dom";
import React, { Component } from "react";

import FishEye from "react-fisheye";

const list = [
  { key: "aaa" },
  { key: "bbb" },
  { key: "ccc" },
  { key: "ddd" },
  { key: "eee" },
  { key: "fff" },
  { key: "ggg" },
  { key: "vvv" }
];

class AppFooter extends Component {
  render() {
    return (
      <FishEye
        multiple={0.35}
        data={list}
        render={(item, index) => {
          return <div>{item.key + " " + index}</div>;
        }}
      />
    );
  }
}
export default AppFooter;
