import { useEffect } from "react"
import icon from "../icon.js"
import {Marker,Popup, useMap} from "react-leaflet"

const MarkerPosition = ({address}) => {
    const position = [address?.location?.lat, address?.location?.lng]
    const map = useMap()
    useEffect(()=>{
        map.flyTo(position, 13,{
          animate: true
        })
      },[map,position])
    return (
    <>
    <Marker icon={icon} position={position}>
      <Popup>
        {address?.ip}<br/> {address?.location?.city}
      </Popup>
    </Marker>
    </>
    );
}
 
export default MarkerPosition;