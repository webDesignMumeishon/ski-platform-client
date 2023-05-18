import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IUserLogged } from '../../interfaces/user'
import UserService from '../../service/UserService'
import { User } from '../../response/User'

// Define the initial state using that type
const initialState: IUserLogged = {
	firstName: '',
	lastName: '',
	email: '',
	p_enabled: false
}

export const fetchUser = createAsyncThunk<User>(
    'user/fetch',
    async () => {
      return await UserService.getUser()
    }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchUser.pending, (state) => {
    //   state.isLoading = true;
      state = initialState;
      return state
    })
    .addCase(fetchUser.fulfilled, (state, action) => {
    //   state.isLoading = false;
        state = action.payload;
        return state
    })
    .addCase(fetchUser.rejected, (state) => {
    //   state.isLoading = false;
      state = initialState;
      return state
    });
  }
})

// export const { getResort } = userSlice.actions
export const { } = userSlice.actions

