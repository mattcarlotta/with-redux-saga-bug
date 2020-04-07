import React from "react";
import { connect } from "react-redux";
import Router from "next/router";

import { startClock, tickClock } from "../actions";
import Page from "../components/page";

class Other extends React.Component {
  static async getInitialProps(props) {
    const { store, isServer } = props.ctx;
    store.dispatch(tickClock(isServer));
    return { isServer };
  }

  componentDidMount() {
    this.props.dispatch(startClock());
  }

  render() {
    return (
      <>
        <button onClick={() => Router.push("/dynamic/[id]", "/dynamic/123")}>
          Navigate to Dynamic Link
        </button>
        <br />
        <button onClick={() => Router.push("/")}>Navigate to Home</button>
        <Page title="Other Page" />
      </>
    );
  }
}

export default connect()(Other);
