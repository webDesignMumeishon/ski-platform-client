import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces/user";
import UserService from "../../service/UserService";
import { User } from "../../response/User";

type StateUserSlice = IUser & { isLoading: boolean };

// Define the initial state using that type
const initialState: StateUserSlice = {
  firstName: "",
  lastName: "",
  email: "",
  p_enabled: false,
  isLoading: true,
  logged: false,
};

export const fetchUser = createAsyncThunk<User>("user/fetch", async () => {
  return await UserService.getUser();
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        // Update isLoading and logged without modifying other properties
        state.isLoading = true;
        state.logged = false;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        // Update the state by returning a new object
        return {
          ...state,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          email: action.payload.email,
          p_enabled: action.payload.p_enabled,
          isLoading: false,
          logged: action.payload.firstName.length > 0 ?? false,
        };
      })
      .addCase(fetchUser.rejected, () => {
        // Reset the state without modifying other properties
        return {
          ...initialState,
          isLoading: false,
        };
      });
  },
});

// export const { getResort } = userSlice.actions
export const {} = userSlice.actions;
