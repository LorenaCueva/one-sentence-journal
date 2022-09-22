import {NavLink, Outlet} from 'react-router-dom';

export function setActiveLink(linkName, isActive){
    const l = document.getElementById(linkName);
    isActive ? l.className = "active" : l.className = "";
}

function NavBar({user}){

    if(!user)
        return(
        <div> 
            <div className="nav-wrapper">
                <nav>
                    <ul className="left hide-on-med-and-down">
                        <li id="home"><NavLink to="/">Home</NavLink></li>
                        <li id="login"><NavLink to="login">Log In</NavLink></li>
                        <li id="motivation"><NavLink to="motivation">Motivation</NavLink></li>
                    </ul>
                </nav>
                <Outlet/>
            </div>
        </div>
        );

    return(
        <div className="nav-wrapper">
            <nav>
                <ul className="left hide-on-med-and-down">
                    <li id="home"><NavLink to="/">Home</NavLink></li>
                    <li id="entries"><NavLink to="entries">Entries</NavLink></li>
                    <li id="logout"><NavLink to="login">Log Out</NavLink></li>
                    <li id="motivation"><NavLink to="motivation">Motivation</NavLink></li>
                    
                </ul>
            </nav>
            <Outlet/>
        </div>
    );
}
export default NavBar;