import { setActiveLink } from "./NavBar";
import {useEffect} from 'react';

function Home({user}){

    function setNavbar(){
        if(user) setActiveLink("entries", false);
        else setActiveLink("login", false);

        setActiveLink("home", true);
        setActiveLink("motivation", false);
    }

    useEffect(()=> {
        setNavbar();
    },[])

    return(
        <div className="row">
                <div className="card-panel grey lighten-4">
                     <h6>Don't let perfect be the enemy of the good.</h6>
                    <h6>The single sentence you write is better than the three pages you didn't write.</h6>
                    <p>"Keeping this kind of journal boosts happiness in many ways. It can help to keep happy memories vivid. It can help us spot patterns and celebrate progress. It can be a record to boost our memories in the future, or to pass along to others. It can help us make sense of tough times and big challenges. It can remind us to be present in the present."</p>
                    <p>-Gretchin Rubin</p>
                </div>
         </div>
    );
}

export default Home;