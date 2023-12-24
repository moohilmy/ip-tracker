import "leaflet/dist/leaflet.css"
import {MapContainer,TileLayer} from "react-leaflet"
import "./map.css"
import { useSelector } from "react-redux";
import MarkerPosition from "./MarkerPosition.jsx";
import DotLoader from  'react-spinners/DotLoader.js'
import ErrorPage from "./ErrorPage.jsx"
const Map = () => {
  
    const {address,isIp,isLoading,isError} = useSelector(state => state.ip)
    const position = [address?.location?.lat, address?.location?.lng]
    return (
  <div className="map-contianer">
    {
      isError && <ErrorPage />
    }
    
    {
        isLoading ?
        <DotLoader color="#5976dd" className={isError ? `error` : ""} /> :
        isIp && <MapContainer className={isError ? `error` : ""} center={position} zoom={13} scrollWheelZoom={true} style={{height: "100%",width: "100vw"}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerPosition address={address}/>
    </MapContainer>
    }
  </div>
);
}
 
export default Map;