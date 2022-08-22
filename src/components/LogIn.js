import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

function LogIn({onLogIn, logged, onLogOut}){

    const [credentials, setCredentials] = useState({username: "", password: ""});
    const navigate = useNavigate();

    useEffect(()=> {
        if(logged){
            onLogOut();
            navigate('/login');
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
            // checkMessage(obj)
            if(typeof obj !== 'object'){
                window.alert(obj)
                setCredentials({username: "", password: ""});
            }
            else{
                fetch(`http://localhost:3000/entries`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({text: "Journey Started", date: "=>" + new Date().toDateString(), userId: obj.user.id})
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
        .then(obj => checkMessage(obj))

    }

    function checkMessage(obj){
        if(typeof obj !== 'object'){
            window.alert(obj)
            setCredentials({username: "", password: ""});
        }
        else{
            onLogIn(obj);
            navigate('/entries');
        }
    }

    function handleFormChange(e){
        const name = e.target.name;
        const value = e.target.value;
        setCredentials({...credentials, [name]:value})
    }

    return(
        <div>
            <form>
                <label>Email: </label>
                <input type="text" placeholder="username" name="username" value={credentials.username} onChange={handleFormChange}/>
                <label>Password: </label>
                <input type="password" placeholder="password" name="password" value={credentials.password} onChange={handleFormChange}/>
            </form>
            <button onClick={handleLogIn}>LogIn</button>
            <button onClick={handleNewUser}>New User</button>
        </div>
    );
}

export default LogIn;