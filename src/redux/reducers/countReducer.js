import {
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
} from '../action_types/counterActionTypes';

// redux/reducers/countReducer.js
const initialState = {
  count: 0,
};

export const CountReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

// import {createSlice} from '@reduxjs/toolkit';

// export const counterSlice = createSlice({
//   name: 'counter',
//   initialState: {
//     value: 0,
//   },
//   reducers: {
//     increment: state => {
//       state.value += 1;
//     },
//     decrement: state => {
//       state.value -= 1;
//     },
//   },
// });

// export const {increment, decrement} = counterSlice.actions;

// export const selectCount = state => state.counter.value;

// export default counterSlice.reducer;
