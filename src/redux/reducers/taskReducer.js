import {ADD_TASK, REMOVE_TASK} from '../action_types/taskListActionTypes';

const initialState = {
  taskList: [],
};

export const TaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        taskList: [...state.taskList, action.payload],
      };
    case REMOVE_TASK:
      return {
        ...state,
        taskList: action.payload,
      };
    default:
      return state;
  }
};
