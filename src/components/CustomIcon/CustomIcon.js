import React from 'react';

const CustomIcon = props => {
  return (
    <svg viewBox="0 0 16 16" className={`icon icon-${props.icon}`}>
      <use xlinkHref={`${props.url}#${props.icon}`} />
    </svg>
  );
};

export default CustomIcon;
