import { useSelector } from "react-redux";

const IPOutput = () => {
    const {address,isIp} = useSelector(state => state.ip)
    return (
    <div className="output-container">
        <div className="output-box">
            <h5 className="output-header">ip address</h5>
            <p className="output-text">{address?.ip}</p>
        </div>
        <div className="output-box">
            <h5 className="output-header">location</h5>
            <p className="output-text">{isIp && `${address?.location?.city}, ${address?.location?.region}`}</p>
        </div>
        <div className="output-box">
            <h5 className="output-header">time zone</h5>
            <p className="output-text">{isIp && `UTC ${address?.location?.timezone}`}</p>
        </div>
        <div className="output-box">
            <h5 className="output-header">isp</h5>
            <p className="output-text">{address?.isp}</p>
        </div>
    </div>
);
}
 
export default IPOutput;