import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IUserLogged } from '../../interfaces/user'
import UserService from '../../service/UserService'
import { User } from '../../response/User'

type StateUserSlice = IUserLogged & { isLoading: boolean}

// Define the initial state using that type
const initialState: StateUserSlice  = {
	firstName: '',
	lastName: '',
	email: '',
	p_enabled: false,
  isLoading: false
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
      state = initialState;
      return state
    })
    .addCase(fetchUser.fulfilled, (state, action) => {
        const newState = {
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          email: action.payload.email,
          p_enabled: action.payload.p_enabled,
          isLoading: false
        }
        state = newState
        return state
    })
    .addCase(fetchUser.rejected, (state) => {
      state = initialState;
      return state
    });
  }
})

// export const { getResort } = userSlice.actions
export const { } = userSlice.actions

