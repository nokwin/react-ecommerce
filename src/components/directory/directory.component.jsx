import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { MenuItem } from "../menu-item/menu-item.component";
import "./directory.styles.scss";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

const DirectoryComponent = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...sectionProps }) => (
      <MenuItem key={id} {...sectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export const Directory = connect(mapStateToProps)(DirectoryComponent);
