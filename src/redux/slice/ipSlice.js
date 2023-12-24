import { createSlice } from "@reduxjs/toolkit";


const ipSlice = createSlice(
    {name: "ip",
    initialState:{
        address: null,
        isIp: false,
        isLoading: false
    },
    reducers:{
        setAddress(state,action){
            state.address = action.payload
        },
        setIsIp(state,action){
            state.isIp = true
        },
        setIsLoading(state,action){
            state.isLoading = action.payload
        }
    }

}
)

const ipReducer = ipSlice.reducer
const ipActions = ipSlice.actions

export {ipActions,ipReducer}

