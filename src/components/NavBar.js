import {NavLink, Outlet} from 'react-router-dom';

function NavBar({user}){

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
                <NavLink to="login">Log Out    |</NavLink>
                <NavLink to="motivation">Motivation    |</NavLink>
            </nav>
            <Outlet/>
        </>
    );
}
export default NavBar;