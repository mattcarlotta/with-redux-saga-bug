import React from "react";
import Router from "next/router";
import { connect } from "react-redux";

const Hello = (store) => (
  <>
    <button onClick={() => Router.push("/")}>Navigate Home Dynamic Link</button>
    <div>{JSON.stringify(store, null, 4)}</div>
  </>
);

export default connect((store) => store)(Hello);
