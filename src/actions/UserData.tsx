import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { UsersDataProps } from "../Types/appTypes";

export interface InitialStateProps {
  UserData: undefined | UsersDataProps;
}

const initialState = {
  UserData: undefined,
} as InitialStateProps;

export const fetchUserData = createSlice({
  name: "UserData",
  initialState,

  reducers: {
    getUserData: (
      state: InitialStateProps,

      action: PayloadAction<UsersDataProps | undefined>
    ) => {
      state.UserData = action.payload || undefined;
    },
  },
});

export const { getUserData } = fetchUserData.actions;
export default fetchUserData.reducer;
