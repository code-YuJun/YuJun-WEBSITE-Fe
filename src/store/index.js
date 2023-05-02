import { configureStore } from "@reduxjs/toolkit"
import homeReducer from "./modules/home"
import detailReducer from "./modules/details"

const store = configureStore({
    reducer:{
        home:homeReducer,
        detail:detailReducer
    }
})

export default store