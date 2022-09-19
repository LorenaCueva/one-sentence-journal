import {NavLink, Outlet} from 'react-router-dom';

export function setActiveLink(linkName, isActive){
    const l = document.getElementById(linkName);
    isActive ? l.className = "active" : l.className = "";
}

function NavBar({user}){

    if(!user)
        return(
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
        );

    return(
        <>
            <nav>
                <NavLink to="/">Home    |</NavLink>
                <NavLink to="entries">Entries    |</NavLink>
                <NavLink to="login">Log Out    |</NavLink>
                <NavLink to="motivation">Motivation    |</NavLink>
            </nav>
            <Outlet/>
        </>
    );
}
export default NavBar;