import { useState } from 'react';

function HomePage({deckAndMeta, setDeckAndMeta}) {
    const [visible, setVisible] = useState(true);
    const [inputValue, setInputValue] = useState('');
    const [selectValue, setSelectValue] = useState('');

    function buttonIniciarRecall() {
        selectValue === "" ? alert("Selecione um deck válido") : setVisible(false); setDeckAndMeta({deck: selectValue, meta: inputValue})
    }

    return (
        visible === true ? 
        <div className="home-page">
            <img src="assets/imgs/logo-zaprecall.png" alt="logo-zaprecall" />
            <h1>ZapRecall</h1>
            <select className="decks" id="decks" onChange={e => setSelectValue(e.target.value)}>
                <option value="">Escolha seu deck</option>
                <option value="jsx">JSX</option>
                <option value="css">CSS</option>
            </select>
            <input type="number" min="0" placeholder="Digite sua meta de zaps..." onChange={e => setInputValue(e.target.value)}></input>
            <button onClick={buttonIniciarRecall}>Iniciar Recall!</button>
        </div>
        : <></>
    );
}

export default HomePage;