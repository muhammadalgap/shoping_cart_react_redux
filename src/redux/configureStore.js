import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import counterReducer from "./ducks/counter";
import itemInCartReducer from "./ducks/itemInCart";
import thunk from "redux-thunk";

const reducers = combineReducers({
  counter: counterReducer,
  itemInCart: itemInCartReducer,
});

const middleware = [thunk];

const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
