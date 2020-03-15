import React, { useContext } from "react";

import MenuItem from "../menu-item/menu-item.component";
import { DirectoryMenuContainer } from "./directory.styles";
import CollectionsContext from "../../context/collections/collections.context";

const Directory = () => {
  const { sections } = useContext(CollectionsContext);

  return (
    <DirectoryMenuContainer>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </DirectoryMenuContainer>
  );
};

export default Directory;
