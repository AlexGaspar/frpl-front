import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import membersReducer from '../features/members/member.slice';


export const store = configureStore({
  reducer: {
    members: membersReducer,
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;