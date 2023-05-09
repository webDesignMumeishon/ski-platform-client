import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IResortReport } from '../../interfaces/resort'
import ResortService from '../../service/ResortService'
import { AxiosResponse } from 'axios'
import { ResortRequest } from '../../request/Resort'

// Define the initial state using that type
const initialState: IResortReport = {
  id: 0,
  city: 'Snowshoe',
  state: 'WV',
  openLifts: '',
  openTerrain: '',
  openTrails: '',
  snowConditions: '',
  status: false
}

export const fetchResort = createAsyncThunk<AxiosResponse<IResortReport>, ResortRequest>(
    'resort/fetch',
    async (params) => {
        const response = await ResortService.getResortReport(params.state, params.town)
        return response
    }
)

export const resortSlice = createSlice({
  name: 'resort',
  initialState,
  reducers: {
    // getResort: (state, actions: PayloadAction<IResortReport>) => {
    //     const {id} = actions.payload
    //     if(state.id !== id){
    //         return {
    //             id: 1,
    //             city: 'Brekcneridge',
    //             state: 'CO'
    //         }
    //     }else{
    //         return state
    //     }
    // }
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchResort.pending, (state) => {
    //   state.isLoading = true;
      state = initialState;
      return state
    })
    .addCase(fetchResort.fulfilled, (state, action) => {
    //   state.isLoading = false;
        state = action.payload.data;
        return state
    })
    .addCase(fetchResort.rejected, (state) => {
    //   state.isLoading = false;
      state = initialState;
      return state
    });
  }
})

// export const { getResort } = resortSlice.actions
export const { } = resortSlice.actions

