import { takeEvery } from "redux-saga/effects";

import { ShopActionTypes } from "./shop.types";

export function fetchCollectionsAsync() {
  console.log("im fire");
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
