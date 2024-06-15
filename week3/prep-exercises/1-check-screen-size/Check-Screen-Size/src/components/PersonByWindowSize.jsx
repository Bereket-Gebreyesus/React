import React from 'react';
import Avatar from './Avatar';
import useWithinWindowWidth from '../hooks/useWithinWindowWidth'; 

const POSSIBLE_STATES = {
  small: { name: "Mikong", size: "small" },
  medium: { name: "Diana", size: "medium" },
  big: { name: "Mithi", size: "big" },
};

const PersonByWindowSize = () => {
  const isBig = useWithinWindowWidth(1000, Infinity);
  const isMedium = useWithinWindowWidth(700, 999);
  const isSmall = useWithinWindowWidth(0, 699);

  let state = null;
  if (isBig) {
    state = POSSIBLE_STATES.big;
  } else if (isMedium) {
    state = POSSIBLE_STATES.medium;
  } else if (isSmall) {
    state = POSSIBLE_STATES.small;
  }

  return (
    <div>
      {state && <Avatar person={state} />}
    </div>
  );
};

export default PersonByWindowSize;