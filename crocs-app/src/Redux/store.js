import {
  legacy_createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";
import {thunk} from "redux-thunk";
import { reducer as authReducer } from "./Auth/reducer";
import { reducer as productReducer } from "./Product/reducer";
const rootReducer = combineReducers({
  authReducer,productReducer
});
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export  const store = legacy_createStore(
  rootReducer,
  enhancer(applyMiddleware(thunk))
);
