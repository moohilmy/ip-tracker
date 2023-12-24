import "leaflet/dist/leaflet.css"
import {MapContainer,TileLayer} from "react-leaflet"
import "./map.css"
import { useSelector } from "react-redux";
import MarkerPosition from "./MarkerPosition.jsx";
import DotLoader from  'react-spinners/DotLoader.js'
const Map = () => {
  
    const {address,isIp,isLoading} = useSelector(state => state.ip)
    const position = [address?.location?.lat, address?.location?.lng]
    return (
  <div className="map-contianer">{
      isLoading ?
      <DotLoader color="#5976dd" /> :
      isIp && <MapContainer center={position} zoom={13} scrollWheelZoom={true} style={{height: "449px",width: "100vw"}}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <MarkerPosition address={address}/>
  </MapContainer>}
  </div>
);
}
 
export default Map;