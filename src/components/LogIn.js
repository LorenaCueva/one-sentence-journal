import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import { setActiveLink } from './NavBar';

function LogIn({onLogIn, user, onLogOut}){

    const [credentials, setCredentials] = useState({username: "", password: ""});
    const navigate = useNavigate();

    function setNavbar(){
        setActiveLink("login", true);
        setActiveLink("home", false);
        setActiveLink("motivation", false);
    }

    useEffect(()=> {
        if(user){
            onLogOut();
            navigate('/login');
        }
        else{
            setNavbar();
        }
    },[])

    function handleNewUser(){
        const name = window.prompt("Name:");
        fetch("http://localhost:3000/register", {
            method : "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "email": credentials.username,
                "password": credentials.password,
                "name": name
            })
        })
        .then(r => r.json())
        .then (obj => {
            if(typeof obj !== 'object'){
                window.alert(obj)
                setCredentials({username: "", password: ""});
            }
            else{
                fetch(`http://localhost:3000/600/entries`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${obj.accessToken}`
                },
                body: JSON.stringify({text: "-Journey Started-", date: new Date(), userId: obj.user.id})
                })
                .then(r => r.json())
                .then(obj2 => {
                    onLogIn(obj);
                    navigate('/entries');
                })
                .catch(error => console.log(error))
            }
        })
    }

    function handleLogIn(e){
        fetch(`http://localhost:3000/login`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "email": credentials.username,
                "password": credentials.password
            })
        })
        .then(r => r.json())
        .then(obj => {
            if(typeof obj !== 'object'){
                window.alert(obj)
                setCredentials({username: "", password: ""});
            }
            else{
                onLogIn(obj);
                navigate('/entries');
            }
        })

    }

    function handleFormChange(e){
        const name = e.target.name;
        const value = e.target.value;
        setCredentials({...credentials, [name]:value})
    }

    return(
        // <div>
        //     <form>
        //         <label>Email: </label>
        //         <input type="text" placeholder="username" name="username" value={credentials.username} onChange={handleFormChange}/>
        //         <label>Password: </label>
        //         <input type="password" placeholder="password" name="password" value={credentials.password} onChange={handleFormChange}/>
        //     </form>
        //     <button onClick={handleLogIn}>LogIn</button>
        //     <button onClick={handleNewUser}>New User</button>
        // </div>

    //     <div classNameName="row">
    //     <form classNameName="col s6">
    //       <div classNameName="row">
    //         <div classNameName="input-field col s12">
    //           {/* <label htmlFor='email'>Email</label> */}
    //           <input placeholder="email" type="email" name = "username" classNameName="validate" value={credentials.username} onChange={handleFormChange}/>
    //           {/* <label htmlFor='password'>Password</label> */}
    //           <input id="password" type="password" name = "password" classNameName="validate" value={credentials.password} onChange={handleFormChange}/>
    //           {/* <label>Email</label> */}
    //           {/* <span className="helper-text" data-error="wrong" data-success="right">Helper text</span> */}
    //         </div>
    //       </div>
    //     </form>
    //   </div>

    <div className="row">
        <form className="col s6 offset-s3">
            <div className="row">
                <div className="input-field col s6">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="username" className="validate" value={credentials.username} onChange={handleFormChange}/>
                </div>
                <div className="input-field col s6">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" name="password" className="validate" value={credentials.password} onChange={handleFormChange}/>
                </div>
            </div>
        </form>
        <div className="row">
            <div className="col s6 offset-s3">
                <button className="btn waves-effect waves-light red lighten-2" onClick={handleLogIn}>LogIn</button>
            </div>
        </div>
        <div className="row">
            <div className="col s6 offset-s3">
                <button className="btn waves-effect waves-light red lighten-2" onClick={handleNewUser}>New User</button>
            </div>
        </div>
  </div>
    );
}

export default LogIn;