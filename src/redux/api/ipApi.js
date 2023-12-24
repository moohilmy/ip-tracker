import { ipActions } from "../slice/ipSlice.js"
import axios from 'axios';
import { API_KEY } from "../../config.js";
export function ipData(IP){
    return async (dispatch) => {
        try {
        dispatch(ipActions.clearAddress())
        dispatch(ipActions.setIsError(false))
        dispatch(ipActions.setIsLoading(true))
        const data = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${IP}`)
        dispatch(ipActions.setAddress(data.data))
        dispatch(ipActions.setIsIp())
        dispatch(ipActions.setIsLoading(false))
        } catch (error) {
        dispatch(ipActions.setIsError(true))
        }
    }
}
