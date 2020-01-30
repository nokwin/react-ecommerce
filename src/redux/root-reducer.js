import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import { userReducer } from "./user/user.reducer";
import { cartReducer } from "./cart/cart.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

const rootReducerNotPersisted = combineReducers({
  user: userReducer,
  cart: cartReducer
});

export const rootReducer = persistReducer(
  persistConfig,
  rootReducerNotPersisted
);
