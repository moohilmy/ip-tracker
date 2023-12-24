import iconLocation from "../assets/icon-location.svg"

const ErrorPage = () => {
    return (
    <div className="err-page">
    <img src={iconLocation} alt="" />
    <p>The IP address you entered is not valid. Please make sure you have entered a correct</p>
    </div>
);
}
 
export default ErrorPage;