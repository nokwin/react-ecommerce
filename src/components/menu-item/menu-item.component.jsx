import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss";

class MenuItemComponent extends React.PureComponent {
  goToCategoryPage = () => {
    const { history, linkUrl } = this.props;

    history.push(linkUrl);
  };

  render() {
    const { title, imageUrl, size } = this.props;

    return (
      <div className={`menu-item ${size}`} onClick={this.goToCategoryPage}>
        <div
          className="background-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="content">
          <h1 className="title">{title.toUpperCase()}</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    );
  }
}

export const MenuItem = withRouter(MenuItemComponent);
