import React from "react";
import { SHOP_DATA } from "./shop.data";
import { PreviewCollection } from "../../components/preview-collection/preview-collection.component";

export class Shop extends React.Component {
  state = {
    collections: SHOP_DATA
  };

  render() {
    const { collections } = this.state;

    return (
      <div>
        {collections.map(({ id, ...collectionProps }) => (
          <PreviewCollection key={id} {...collectionProps} />
        ))}
      </div>
    );
  }
}
