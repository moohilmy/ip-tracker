import IPInput from "./IPInput.jsx";
import IPOutput from "./IPoutput.jsx";
import "./header.css"
const Header = () => {
    return ( 
        <header className="main-section">
            <h1 className="logo-name">IP Address Tracker</h1>
            <IPInput />
            <IPOutput/>
        </header>
     );
}
 
export default Header;