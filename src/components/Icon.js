import React from 'react';

function Icon(props) {
  console.log('Icon');
  const { label, src } = props;

  return <img src={src} alt={label} />;
}

export default React.memo(Icon);
