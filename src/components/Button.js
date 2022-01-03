import React from 'react';
import classNames from 'classnames';
function Button(props) {
  const { icon, className, buttonProps } = props;

  return (
    <button className={classNames('btn', className)} {...buttonProps}>
      {icon}
    </button>
  );
}

export default React.memo(Button);
