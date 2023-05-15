import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"
import {} from "@/api"
export const fetchHomeDataAction = createAsyncThunk("fetchdata",() => {

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
    }
})
export const {getArticles} = homeSlice.actions
export default homeSlice.reducer