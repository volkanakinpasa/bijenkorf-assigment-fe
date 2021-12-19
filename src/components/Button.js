import React from 'react';

function Button(props) {
  const { icon, buttonProps } = props;

  return <button {...buttonProps}>{icon}</button>;
}

export default Button;
