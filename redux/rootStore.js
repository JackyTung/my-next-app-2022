import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createEpicMiddleware } from "redux-observable";
import { createWrapper } from "next-redux-wrapper";

import rootEpic from "@/redux/rootEpic";
import rootReducer from "@/redux/rootReducer";

const configureStore = () => {
  const epicMiddleware = createEpicMiddleware();
  const store = createStore(
    rootReducer,
    composeWithDevTools({ trace: true })(applyMiddleware(epicMiddleware))
  );

  epicMiddleware.run(rootEpic);

  return store;
};

// https://github.com/kirill-konshin/next-redux-wrapper/issues/276#issuecomment-891342315
export const wrapper = createWrapper(configureStore, {
  debug: false,
  serializeState: (state) => JSON.stringify(state),
  deserializeState: (state) => JSON.parse(state),
});
