import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ContactDetails } from "../pages/About/ContactDetails";

interface UserState {
  user: ContactDetails[];
}

const initialState: UserState = {
  user: [],
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<ContactDetails>) => {
      state.user.push(action.payload);
    },
  },
});

export const { addUser } = UserSlice.actions;
export default UserSlice.reducer;
