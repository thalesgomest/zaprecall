import HomePage from "./HomePage";
import DeckFlashCards from "./DeckFlashCards";
import { useState } from 'react';



function App() {

    const [deckAndMeta, setDeckAndMeta] = useState({deck:"", meta:""});
    
    return (
        <>
            <HomePage deckAndMeta={deckAndMeta} setDeckAndMeta={setDeckAndMeta}/>
            <DeckFlashCards deckAndMeta={deckAndMeta} />
        </>
    );
}

export default  App;
