import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";

const configureStore = () => {
  //@ts-ignore
  const composeEnhancer = window.devToolsExtension
    ? //@ts-ignore
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;
  return createStore(reducer, composeEnhancer(applyMiddleware(thunk)));
};

export default configureStore();
