import React from "react";
import { Route } from "react-router-dom";

import { default as CollectionsOverview } from "../../components/collections-overview/collections-overview.container";
import { default as CollectionsPage } from "../collection/collection.container";

const ShopPageComponent = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionsPage} />
    </div>
  );
};

export const ShopPage = ShopPageComponent;
