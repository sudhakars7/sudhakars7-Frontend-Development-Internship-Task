import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import savedItemsSlice from './slices/savedItemsSlice';
import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: {
    savedItems: savedItemsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
