import React, { lazy } from "react";
import { Route } from "react-router-dom";

const CollectionsOverview = lazy(() =>
  import("../../components/collections-overview/collections-overview.container")
);
const CollectionsPage = lazy(() =>
  import("../collection/collection.container")
);

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionsPage} />
    </div>
  );
};

export default ShopPage;
