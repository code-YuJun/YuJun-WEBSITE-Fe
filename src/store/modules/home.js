import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"
import { getHomeArticles } from "@/api/api"
export const fetchHomeDataAction = createAsyncThunk("fetchdata",async () => {
    const res = await getHomeArticles()
    return res
})

const homeSlice = createSlice({
    name: "home",
    initialState: {
        articles:[]
    },
    reducers: {
        getArticles(state,{payload}){
            state.articles = payload
        }
    },
    extraReducers:{
        [fetchHomeDataAction.fulfilled](state,{payload}){
            state.articles = payload
        }
    }
})
export const {getArticles} = homeSlice.actions
export default homeSlice.reducer