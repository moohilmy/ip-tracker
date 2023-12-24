import locationIcon from "./assets/icon-location.svg"
import L from "leaflet"

export default L.icon({
    iconSize: [32,40],
    iconAnchor: [10,41],
    popupAnchor: [2,-40],
    iconUrl: locationIcon
})