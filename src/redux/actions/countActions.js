import {
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
} from '../action_types/counterActionTypes';

// redux/actions/countAction.js
export const increment = () => {
  return {
    type: INCREMENT_COUNTER,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT_COUNTER,
  };
};
