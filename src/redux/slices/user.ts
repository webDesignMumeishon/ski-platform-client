import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces/user";
import UserService from "../../service/UserService";

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

export const fetchUser = createAsyncThunk<IUser>("user/fetch", async () => {
  const response = await UserService.getUser();

  const user: StateUserSlice = {
    firstName: response.firstName,
    lastName: response.lastName,
    email: response.email,
    p_enabled: response.p_enabled,
    isLoading: false,
    logged: response.code === 200 ? true : false,
  }
  return user
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
          ...action.payload,
          isLoading: false
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
