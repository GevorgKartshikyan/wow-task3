import {createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../Api";

export const getHomePageRequests = createAsyncThunk('homePageRequests/getHomePageRequests', async (payload, thunkAPI:any) => {
    try {
        const {data} = await Api.getHomePageData()
        return data
    } catch (e) {
        // @ts-ignore
        return thunkAPI.rejectWithValue(e.response.data);
    }
})
