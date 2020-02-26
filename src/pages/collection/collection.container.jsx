import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { compose } from "redux";

import { selectIsCollectionsIsntLoaded } from "../../redux/shop/shop.selectors";
import { WithSpinner } from "../../components/with-spinner/with-spinner.component";
import CollectionPage from "./collection.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsIsntLoaded
});

export const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);
