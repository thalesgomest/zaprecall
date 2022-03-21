import HomePage from "./HomePage";
import DeckFlashCards from "./DeckFlashCards";
import { useState } from 'react';



function App() {

    const [deckAndMeta, setDeckAndMeta] = useState({deck:"", meta:""});
    const [visible, setVisible] = useState(true);
    
    return (
        <>
            <HomePage visible={visible} setVisible={setVisible} deckAndMeta={deckAndMeta} setDeckAndMeta={setDeckAndMeta}/>
            <DeckFlashCards deckAndMeta={deckAndMeta} setDeckAndMeta={setDeckAndMeta} visible={visible} setVisible={setVisible}/>
        </>
    );
}

export default  App;
