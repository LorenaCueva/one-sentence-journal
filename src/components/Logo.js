import logo from "../img/logo2.png"

function Logo(){
    return(
        <div className="row">
            <img src={logo} alt="logo"  height={200} className="center aligh"></img>
        </div>
    )  
}

export default Logo;