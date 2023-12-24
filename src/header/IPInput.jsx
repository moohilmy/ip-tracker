import { useState } from "react";
import iconArrow from "../assets/icon-arrow.svg"
import { useDispatch, useSelector } from "react-redux";
import {ipData} from "../redux/api/ipApi"
const IPInput = () => {
    const {address} = useSelector(state => state.ip)
    const dispatch = useDispatch()
    const [intValue, setIntValue] = useState(address?.ip);
    const formSubmit = (e) =>{
        e.preventDefault()
        dispatch(ipData(intValue))
    }
    return ( 
        <form className="int" onSubmit={formSubmit}>
            <input type="text" placeholder="Search for any IP address or domain" name="int-ip" id="int-ip" value={intValue} onChange={(e)=> setIntValue(e.target.value)} />
            <button type="submit" className="btn">
                <img src={iconArrow} alt="" />
            </button>
        </form>
     );
}
 
export default IPInput;