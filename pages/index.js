import React from "react";
import { connect } from "react-redux";
import Router from "next/router";

import { startClock, tickClock } from "../actions";
import Page from "../components/page";

class Index extends React.Component {
  static async getInitialProps(props) {
    const { store, isServer } = props.ctx;
    store.dispatch(tickClock(isServer));

    return { isServer };
  }

  componentDidMount() {
    this.props.startClock();
  }

  render() {
    return (
      <>
        <button onClick={() => Router.push("/dynamic/[id]", "/dynamic/123")}>
          Navigate to Dynamic Link
        </button>
        <br />
        <button onClick={() => Router.push("/other")}>
          Navigate to Other Page
        </button>
        <br />
        <button onClick={() => Router.push("/not-found")}>
          Navigate to Not Found Page
        </button>
        <br />
        <Page title="Index Page" />
        <pre>
          <code>{JSON.stringify(this.props, null, 4)}</code>
        </pre>
      </>
    );
  }
}

export default connect((store) => store, { startClock })(Index);
