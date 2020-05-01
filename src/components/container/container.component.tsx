import React from "react";

import "./container.styles.scss";

const Container: React.FC = ({ children }) => (
  <div className="container">{children}</div>
);

export default Container;
