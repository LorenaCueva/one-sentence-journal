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
  const [entries, setEntries] = useState([]);

  function onLogIn(user){
    setUser(user);
  }

  function onLogOut(){
    setUser(null);
  }

  function onNewEntry(newEntry){
    setEntries([...entries, newEntry])
  }

  function handleEditEntry(editedEntry){
    const newEntries = entries.map(entry => entry.id === editedEntry.id ? editedEntry : entry);
    setEntries(newEntries);
  }

  useEffect(()=> {
    if(user){
        fetch(`http://localhost:3000/600/entries?userId=${user.user.id}`,{
        method: "GET",
        headers: {
            "Authorization": `Bearer ${user.accessToken}`
        }
    })
    .then(r => r.json())
    .then(obj => {
      setEntries(obj)})
    .catch(error => console.log(error))
  }
  },[user])


  return (
    <div className="App">
      <h1>Title ???</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBar user={user}/>}>
            <Route index element={<Home/>}></Route>
            <Route path='entries' element={<Entries user={user} entries={entries} onEditEntry={handleEditEntry}/>}></Route> 
            <Route path='login' element={<LogIn onLogIn={onLogIn} onLogOut={onLogOut} user={user}/>}></Route>
            <Route path='newEntry' element={<NewEntry user={user} onNewEntry={onNewEntry}/>}></Route>
            <Route path='motivation' element={<Quote/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
