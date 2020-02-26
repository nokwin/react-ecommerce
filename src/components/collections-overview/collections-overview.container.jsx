import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { compose } from "redux";

import {
  selectShopCollections,
  selectIsCollectionsIsntLoaded
} from "../../redux/shop/shop.selectors";
import { WithSpinner } from "../with-spinner/with-spinner.component";
import { CollectionsOverview } from "./collections-overview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsIsntLoaded,
  collections: selectShopCollections
});

export const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);
