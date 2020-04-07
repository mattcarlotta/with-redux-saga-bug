import React from "react";
import Router from "next/router";

const NotFound = () => (
  <>
    <button onClick={() => Router.push("/")}>Navigate Home Dynamic Link</button>
    <div>Page not found.</div>
  </>
);

export default NotFound;
