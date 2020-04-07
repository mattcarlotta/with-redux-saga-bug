import React from "react";
import Router from "next/router";
import { connect } from "react-redux";

const Hello = (store) => (
  <>
    <button onClick={() => Router.push("/")}>Navigate Home Dynamic Link</button>
    <pre>
      <code>{JSON.stringify(store, null, 4)}</code>
    </pre>
  </>
);

export default connect((store) => store)(Hello);
