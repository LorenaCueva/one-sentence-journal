import {useEffect, useState} from 'react';
import { setActiveLink } from './NavBar';

function Quote({user}){

    const [quote, setQuote] = useState(null);

    function setNavbar(){
        if(!user) setActiveLink("login", false);
        else setActiveLink("entries", false)

        setActiveLink("motivation", true);
        setActiveLink("home", false);
    }

    function getQuote(){
        fetch("https://motivational-quote-api.herokuapp.com/quotes/random")
        .then(r => r.json())
        .then(quote => setQuote(quote))
        .catch(error => console.log(error));
    }

    useEffect(() => {
        setNavbar();
        getQuote()}
        ,[])

    if(quote)
        return(
            <div className="card-panel grey lighten-4">
                <h6>{quote.quote}</h6>
                <p>-{quote.person}</p>
                <button className="btn waves-effect waves-light red lighten-2" onClick={getQuote}>I need more motivation</button>
            </div>
        );
    
    return(
        <div className="card-panel grey lighten-4">
            <h1>Quote</h1>
            <h2>Thinking...</h2>
        </div>
        
    );
}

export default Quote;