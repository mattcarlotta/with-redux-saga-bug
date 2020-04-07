import React from "react";
import Router from "next/router";
import { connect } from "react-redux";

const NotFound = (store) => (
  <>
    <button onClick={() => Router.push("/")}>Navigate Home</button>
    <div>Page not found.</div>
    <pre>
      <code>{JSON.stringify(store, null, 4)}</code>
    </pre>
  </>
);

export default connect((store) => store)(NotFound);
