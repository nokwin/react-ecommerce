import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionStartAsync } from "../../redux/shop/shop.actions";
import { CollectionsOverviewContainer } from "../../components/collections-overview/collections-overview.container";
import { CollectionPageContainer } from "../collection/collection.container";

class ShopPageComponent extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;

    fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionStartAsync())
});

export const ShopPage = connect(null, mapDispatchToProps)(ShopPageComponent);
