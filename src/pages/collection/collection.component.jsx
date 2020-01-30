import React from "react";
import { connect } from "react-redux";

import "./collection.styles.scss";
import { selectCollection } from "../../redux/shop/shop.selectors";

const CollectionPageComponent = ({ collection }) => (
  <div className="collection">
    <h2>COLLECTION PAGE</h2>
    <pre>{JSON.stringify(collection, null, 4)}</pre>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export const CollectionPage = connect(mapStateToProps)(CollectionPageComponent);
