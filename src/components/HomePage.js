import { useState } from "react";

function HomePage({ visible, setVisible, deckAndMeta, setDeckAndMeta }) {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");

  function buttonIniciarRecall() {
    if (selectValue === "") {
      alert("Selecione um deck válido");
      return;
    } else if (parseInt(inputValue) > 8) {
      alert("A meta máxima de Zaps é 8");
      return;
    } else {
      setVisible(false);
      setDeckAndMeta({ deck: selectValue, meta: inputValue });
    }
  }

  return visible === true ? (
    <div className="home-page">
      <img src="assets/imgs/logo-zaprecall.png" alt="logo-zaprecall" />
      <h1>ZapRecall</h1>
      <select
        className="decks"
        id="decks"
        onChange={(e) => setSelectValue(e.target.value)}
      >
        <option value="">Escolha seu deck</option>
        <option value="jsx">JSX</option>
        <option value="css">CSS</option>
      </select>
      <input
        type="number"
        min="0"
        max="8"
        placeholder="Digite sua meta de zaps..."
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button onClick={buttonIniciarRecall}>Iniciar Recall!</button>
    </div>
  ) : (
    <></>
  );
}

export default HomePage;
