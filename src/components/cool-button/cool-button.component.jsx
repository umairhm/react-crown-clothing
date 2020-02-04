import React from 'react';

import './cool-button.styles.scss';

const CoolButton = ({children, ...otherProps}) => (
  <button className="cool-button" {...otherProps}>
    {children}
  </button>
);

export default CoolButton;