import Header from "./header/Header.jsx"
import Map from "./map/Map.jsx"
import {Provider, useSelector} from "react-redux"
import store from "./redux/store.js"
function App() {
  return (
    <Provider store={store}>
    <Header/>
    <Map/>
    </Provider>
  )
}

export default App
