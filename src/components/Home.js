import { setActiveLink } from "./NavBar";
import {useEffect} from 'react';

function Home(){

    useEffect(()=> {
        setActiveLink("home", true);
        setActiveLink("login", false);
        setActiveLink("motivation", false);
    },[])

    return(
        <div>
            <p>Don't let perfect be the enemy of the good</p>
            <p>The single sentence you write is better than the three pages you didn't write.</p>
            <p>"Keeping this kind of journal boosts happiness in many ways. It can help to keep happy memories vivid. It can help us spot patterns and celebrate progress. It can be a record to boost our memories in the future, or to pass along to others. It can help us make sense of tough times and big challenges. It can remind us to be present in the present."</p>
            <sub>-Gretchin Rubin</sub>
        </div>
    );
}

export default Home;