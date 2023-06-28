import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ContactType } from "../data/DataType";

interface UserState {
  user: ContactType[];
}

const initialState: UserState = {
  user: [],
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<ContactType>) => {
      state.user.push(action.payload);
    },
  },
});

export const { addUser } = UserSlice.actions;
export default UserSlice.reducer;
