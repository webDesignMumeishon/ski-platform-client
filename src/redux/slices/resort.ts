import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IResortReport } from '../../interfaces/resort'
import ResortService from '../../service/ResortService'
import { ResortRequest } from '../../request/Resort'

type StateResortSlice = IResortReport & { isLoading: boolean}

// Define the initial state using that type
const initialState: StateResortSlice = {
  id: 0,
  city: 'Snowshoe',
  state: 'WV',
  openLifts: '',
  openTerrain: '',
  openTrails: '',
  snowConditions: '',
  status: false,
  isLoading: true
}

// <IResortReport (return type), ResortRequest (params type)>
export const fetchResort = createAsyncThunk<IResortReport, ResortRequest>(
    'resort/fetch',
    async (params) => {
      const resort =  await ResortService.getResortReport(params.state, params.town)
      return resort.data
    }
)

export const resortSlice = createSlice({
  name: 'resort',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchResort.pending, (state) => {
      state.isLoading = true;
      state = initialState;
      return state
    })
    .addCase(fetchResort.fulfilled, (state, action) => {
        return {
          ...state,
          ...action.payload,
          isLoading: false
        }
    })
    .addCase(fetchResort.rejected, () => {
      return {
        ...initialState,
        isLoading: false,
      };
    });
  }
})

export const { } = resortSlice.actions

