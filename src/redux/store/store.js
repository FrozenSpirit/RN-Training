import {allReducers} from '../reducers/allReducers';
import {configureStore} from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: allReducers,
});
