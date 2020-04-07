import { connect } from "react-redux";

import Counter from "./counter";
import Clock from "./clock";

function Page({ error, lastUpdate, light, placeholderData, title }) {
  return (
    <div>
      <h1>{title}</h1>
      <Clock lastUpdate={lastUpdate} light={light} />
      <Counter />
      {placeholderData && (
        <pre>
          <code>{JSON.stringify(placeholderData, null, 2)}</code>
        </pre>
      )}
      {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
    </div>
  );
}

export default connect((state) => state)(Page);
