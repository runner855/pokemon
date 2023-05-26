import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface InitialStateProps {
  UserFavorites: number[];
}

const initialState = {
  UserFavorites: [],
} as InitialStateProps;

export const fetchUserFavorites = createSlice({
  name: "UserFavorites",
  initialState,

  reducers: {
    getUserFavorites: (
      state: InitialStateProps,

      action: PayloadAction<number[]>
    ) => {
      state.UserFavorites = action.payload;
    },
  },
});

export const { getUserFavorites } = fetchUserFavorites.actions;
export default fetchUserFavorites.reducer;
