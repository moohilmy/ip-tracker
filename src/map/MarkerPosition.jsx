import icon from "../icon.js"
import {Marker,Popup} from "react-leaflet"

const MarkerPosition = ({address}) => {
    const position = [address?.location?.lat, address?.location?.lng]

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