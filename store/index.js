import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import rootReducer from "../reducer";
import rootSaga from "../saga";

export default (initialState, { isServer, req = null }) => {
  const saga = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(saga))
  );

  if (req || !isServer) {
    store.sagaTask = saga.run(rootSaga);
  }

  return store;
};
