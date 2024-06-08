import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { CreeateFeed ,GetFeed } from '../../Services/APICall'

export const addFeed = createAsyncThunk('addFeed',async (data,{rejectWithValue} )=>{
    try {
        // console.log(data,'=============data')
        const response = await CreeateFeed(data)
        if (!response.status) {
            return rejectWithValue(response.message);
          }
        return response; 
    } catch (error) {
        // console.log(error,'================error')
        const message =
        error.data?.message || error.message || "An unknown error occurred";
      return rejectWithValue(message);
    }
})

export const getFeedResponse = createAsyncThunk("getFeed",async(currentPages,{rejectWithValue})=>{
    try {
        const response = await GetFeed(currentPages)
        if (!response.status) {
            return rejectWithValue(response.message);
          }
        return response; 
    } catch (error) {
        // console.log(error,'================error')
        const message =
        error.data?.message || error.message || "An unknown error occurred";
      return rejectWithValue(message);
    }
})

const GetFeedData = createSlice({
    name:"getFeedData",
    initialState:{
        feed:null,
        loading:false,
        error:null
    },
    extraReducers:(builder)=>{
        builder.addCase(getFeedResponse.pending,(state)=>{
            state.loading = true;
            state.error=null;
        })
        .addCase(getFeedResponse.fulfilled,(state, action)=>{
            state.loading= false;
            state.feed=action.payload;
        })
        .addCase(getFeedResponse.rejected,(state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export default GetFeedData.reducer;


