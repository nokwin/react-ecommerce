import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { PreviewCollection } from "../../components/preview-collection/preview-collection.component";
import { selectShopCollections } from "../../redux/shop/shop.selectors";

const ShopComponent = ({ collections }) => (
  <div>
    {collections.map(({ id, ...collectionProps }) => (
      <PreviewCollection key={id} {...collectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
});

export const Shop = connect(mapStateToProps)(ShopComponent);
