import { createSlice } from "@reduxjs/toolkit"

const UserNameSlice = createSlice({
  name: "username",
  initialState:{
    name: '',
  },
  reducers: {
    addUsername: (state, action) => {
      state.name = action.payload
    },
  },
})
export const {addUsername} = UserNameSlice.actions;
export default UserNameSlice.reducer