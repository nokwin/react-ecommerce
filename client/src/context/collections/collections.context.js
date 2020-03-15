import { createContext } from "react";

import { SHOP_DATA, DIRECTORY_DATA } from "./shop.data";

const CollectionsContext = createContext({
  collections: SHOP_DATA,
  sections: DIRECTORY_DATA
});

export default CollectionsContext;
