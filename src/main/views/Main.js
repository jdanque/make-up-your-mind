import React, { Component } from "react";
import { Container } from '@material-ui/core';

class Main extends Component {
  componentDidMount() {
    this.disableReactDevTools();
  }

  // Only in production
  disableReactDevTools = () => {
    if (process.env.NODE_ENV === "production") {
      if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === "object") {
        for (const [key, value] of Object.entries(
          window.__REACT_DEVTOOLS_GLOBAL_HOOK__
        )) {
          window.__REACT_DEVTOOLS_GLOBAL_HOOK__[key] =
            typeof value === "function" ? () => {} : null;
        }
      }
    }
  };

  render() {
    return (
      <div id="main" className="main">
        <Container maxWidth="md">Hello</Container>
      </div>
    );
  }
}

export default Main;
