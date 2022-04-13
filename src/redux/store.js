import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import uiReducer from "./reducers/uiReducers";
import creatorReducer from "./reducers/creatorReducers";

const reducer = combineReducers({
  UI: uiReducer,
  creator: creatorReducer,
});

const initialState = {};
const middleware = [thunk, promise];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
