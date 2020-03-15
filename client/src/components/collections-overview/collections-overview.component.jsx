import React, { useContext } from "react";

import CollectionPreview from "../collection-preview/collection-preview.component";
import { CollectionsOverviewContainer } from "./collections-overview.styles";
import CollectionsContext from "../../context/collections/collections.context";

export const CollectionsOverview = () => {
  const { collections } = useContext(CollectionsContext);

  return (
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionsOverviewContainer>
  );
};

export default CollectionsOverview;
