import counterReducer from "../reducers/counterReducer";
import { createStore } from "redux";

const store = createStore(
  counterReducer,
  window.__ReDUX_DEVTOOLS_EXTENSION__ &&
    Window.__REDUX - __ReDUX_DEVTOOLS_EXTENSION__()
);
export default store;
