import { ShopActionTypes } from "./shop.types";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

export const fetchCollectionStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionSuccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionError = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

export const fetchCollectionStartAsync = () => dispatch => {
  const collectionRef = firestore.collection("collections");
  dispatch(fetchCollectionStart());

  collectionRef.get().then(snapshot => {
    const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    dispatch(fetchCollectionSuccess(collectionsMap));
  });
};
