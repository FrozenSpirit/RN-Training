import {ADD_TASK, REMOVE_TASK} from '../action_types/taskListActionTypes';

export const addTask = payload => {
  return {
    type: ADD_TASK,
    payload: payload,
  };
};

export const removeTask = payload => {
  return {
    type: REMOVE_TASK,
    payload: payload,
  };
};
