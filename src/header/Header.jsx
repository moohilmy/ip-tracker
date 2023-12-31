import { useEffect, useState } from "react";
import IPInput from "./IPInput.jsx";
import IPOutput from "./IPoutput.jsx";
import "./header.css"
import { useDispatch } from "react-redux";
import { ipData } from "../redux/api/ipApi.js";
const Header = () => {
    const dispatch = useDispatch()
    const [isIpDataDispatched, setIpDataDispatched] = useState(false);

    useEffect(() => {
    if (!isIpDataDispatched) {
        dispatch(ipData(""));
        setIpDataDispatched(true);}
    }, [dispatch, isIpDataDispatched]);
    return ( 
        <header className="main-section">
            <h1 className="logo-name">IP Address Tracker</h1>
            <IPInput />
            <IPOutput/>
        </header>
     );
}
 
export default Header;