import { combineReducers, createStore } from "redux";
import formReducer from "./reducers/formReducer";

const rootReducers = combineReducers({
  formReducer: formReducer,
});

export const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
