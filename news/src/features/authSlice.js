import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginAPI } from "../Services/APICall";

export const loginUser = createAsyncThunk("loginUser", async (data,{rejectWithValue}) => {
    try {
        console.log(data);
        const response = await LoginAPI(data);
        if (!response.status) {
            return rejectWithValue(response.message);
          }
        return response; // Ensure this returns the data you want to set in the state
    } catch (error) {
        const message =
        error.data?.message || error.message || "An unknown error occurred";
      return rejectWithValue(message);
    }
});

const getUserDetails = createSlice({
    name: "userDetails",
    initialState: {
        user: {},
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                // console.log("pending")
                state.loading = true;
                state.error=null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                // console.log(state,'==========full')
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                // console.log(action.payload,'=====rej======')
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default getUserDetails.reducer;
