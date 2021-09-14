import React from 'react';

type StarProps = {
  isFilled: boolean;
};

const Star: React.FC<StarProps> = ({ isFilled }) => {
  if (isFilled) {
    return <img src="/star-filled.svg" alt="Star filled" />;
  }

  return <img src="/star.svg" alt="Star" />;
};

export default Star;