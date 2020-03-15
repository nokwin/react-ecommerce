import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import { directoryReducer } from "./directory/directory.reducer";
import { shopReducer } from "./shop/shop.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

const rootReducerNotPersisted = combineReducers({
  directory: directoryReducer,
  shop: shopReducer
});

export const rootReducer = persistReducer(
  persistConfig,
  rootReducerNotPersisted
);
