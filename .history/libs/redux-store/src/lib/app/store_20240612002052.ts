import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { counterSlice } from '../features/counter/counterSlice';
import resumeReducer from '../features/resumeSlice';

// `combineSlices` automatically combines the reducers using
// their `reducerPath`s, therefore we no longer need to call `combineReducers`.
const rootReducer = combineSlices(counterSlice);

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

const store = configureStore({
  reducer: {
    resume: resumeReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
