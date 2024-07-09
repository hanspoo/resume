import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { counterSlice } from '../features/counter/counterSlice';
import resumeSlice from '../features/resumeSlice';

const rootReducer = combineSlices(counterSlice);

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export const store = configureStore({
  reducer: {
    resume: resumeSlice,
  },
});

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
