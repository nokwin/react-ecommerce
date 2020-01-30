import React from "react";

import "./preview-collection.styles.scss";

export const PreviewCollection = ({ title, items }) => (
  <div className="collection-preview">
    <h1>{title.toUpperCase()}</h1>
    <div className="preview">
      {items.slice(0, 4).map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  </div>
);
