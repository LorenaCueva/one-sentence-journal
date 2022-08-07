import {useState} from 'react';

function LogIn({onLogIn}){

    const [credentials, setCredentials] = useState({username: "", password: ""});

    // function fetchUsers(){
    //     fetch("http://localhost:4000/credentials")
    //     .then(r => r.json())
    //     .then(users => console.log(users))
    // }

    function validateCredentials(){
        fetch(`http://localhost:4000/credentials?username=${credentials.username}`)
        .then(r => r.json())
        .then(user => {
            if(user.length === 0){
                window.alert("No user found");
                setCredentials({...credentials, password: ""});
            }
            else{
                if(credentials.password !== user[0].password){
                    window.alert("Incorrect Password");
                    setCredentials({...credentials, password: ""});
                }
                onLogIn(user);
            }
        })
    }

    function handleNewUser(){

    }

    function handleFormSubmit(e){
        e.preventDefault();
    //    console.log(credentials);
        validateCredentials();
    }

    function handleFormChange(e){
        const name = e.target.name;
        const value = e.target.value;
        setCredentials({...credentials, [name]:value})
    }

    return(
        <div>
            <form onSubmit={handleFormSubmit}>
                <label>Username: </label>
                <input type="text" placeholder="username" name="username" value={credentials.username} onChange={handleFormChange}/>
                <label>Password: </label>
                <input type="password" placeholder="password" name="password" value={credentials.password} onChange={handleFormChange}/>
                <input type="submit" value="Login" />
                <button onClick={handleNewUser}>New User</button>
            </form>
        </div>
    );
}

export default LogIn;