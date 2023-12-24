import {configureStore} from "@reduxjs/toolkit"
import { ipReducer } from "./slice/ipSlice.js"


const store = configureStore({
    reducer: {
        ip: ipReducer
    }
})


export default store