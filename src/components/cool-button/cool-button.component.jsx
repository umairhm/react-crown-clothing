import React from 'react';

import './cool-button.styles.scss';

const CoolButton = ({children, isGoogleSignIn, ...otherProps}) => (
  <button className={`cool-button ${ isGoogleSignIn ? 'google-sign-in' : '' }`} {...otherProps}>
    {children}
  </button>
);

export default CoolButton;