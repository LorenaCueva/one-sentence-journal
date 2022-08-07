import '../App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {useState, useEffect } from 'react';
import NavBar from './NavBar';
import Home from './Home';
import Entries from './Entries';
import NewEntry from './NewEntry';
import Quote from './Quote';
import LogIn from './LogIn';

function App() {

  const [user, setUser] = useState(null);

  function onLogIn(credentials){
    console.log(credentials[0].username)
    // setUser(credentials[0].username);
    // console.log(user);
    setUser("Aki");
  }

  // console.log(user);


  return (
    <div className="App">
      <h1>Title ???</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBar user={user}/>}>
            <Route index element={<Home/>}></Route>
            <Route path='entries' element={<Entries user={user}/>}></Route>
            <Route path='login' element={<LogIn onLogIn={onLogIn}/>}></Route>
            <Route path='newEntry' element={<NewEntry/>}></Route>
            <Route path='motivation' element={<Quote/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
