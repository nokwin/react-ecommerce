import React from "react";

import "./collections-overview.styles.scss";
import { PreviewCollection } from "../preview-collection/preview-collection.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollections } from "../../redux/shop/shop.selectors";

const CollectionsOverviewComponent = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...collectionProps }) => (
      <PreviewCollection key={id} {...collectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
});

export const CollectionsOverview = connect(mapStateToProps)(
  CollectionsOverviewComponent
);
