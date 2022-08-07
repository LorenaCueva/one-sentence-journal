import {NavLink, Outlet, useLocation} from 'react-router-dom';

function NavBar({user}){

    // let path = useLocation();
    // if (path === )

    if(!user)
        return(
            <>
            <nav>
                <NavLink to="/">Home    |</NavLink>
                <NavLink to="login">Log In     |</NavLink>
                <NavLink to="motivation">Motivation    |</NavLink>
            </nav>
            <Outlet/>
        </>
        );

    return(
        <>
            <nav>
                <NavLink to="/">Home    |</NavLink>
                <NavLink to="entries">Entries    |</NavLink>
                <NavLink to="newEntry">New Entry    |</NavLink>
                <NavLink to="login">Log Out    |</NavLink>
                <NavLink to="motivation">Motivation    |</NavLink>
            </nav>
            <Outlet/>
        </>
    );
}
export default NavBar;