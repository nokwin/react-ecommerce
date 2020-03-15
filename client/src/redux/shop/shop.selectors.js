import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectShopCollections = createSelector([selectShop], shop =>
  shop.collections ? Object.values(shop.collections) : []
);

export const selectCollection = collectionUrlParam =>
  createSelector([selectShopCollections], collections =>
    collections
      ? collections.find(
          collection => collection.routeName === collectionUrlParam
        )
      : []
  );

export const selectCollectionsFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

export const selectIsCollectionsIsntLoaded = createSelector(
  [selectShop],
  shop => shop.collections === null
);