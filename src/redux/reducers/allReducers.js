import {combineReducers} from '@reduxjs/toolkit';
import {CountReducer} from './countReducer';
import {TaskReducer} from './taskReducer';

export const allReducers = combineReducers({
  counter: CountReducer,
  tasks: TaskReducer,
});
