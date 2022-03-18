import Header from "./Header";
import FlashCard from "./FlashCard";
import Footer from "./Footer";
import { useState } from 'react';


const questions = [
    {
        question: "O que é JSX?",
        answer: "Uma extensão de linguagem do JavaScript"
    },
    {
        question: "O React é __ ",
        answer: "uma biblioteca JavaScript para construção de interfaces"
    },
    {
        question: "Componentes devem iniciar com __",
        answer: "letra maiúscula"
    },
    {
        question: "Podemos colocar __ dentro do JSX",
        answer: "expressões"
    },
    {
        question: "O ReactDOM nos ajuda __ ",
        answer: "interagindo com a DOM para colocar componentes React na mesma"
    },
    {
        question: "Usamos o npm para __",
        answer: "gerenciar os pacotes necessários e suas dependências"
    },
    {
        question: "Usamos props para __",
        answer: "passar diferentes informações para componentes"
    },
    {
        question: "Usamos estado (state) para __",
        answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
    }
]

// !<------Shuffled Questions------>

function comparador() { 
	return Math.random() - 0.5; 
}

let questionsShuffled = [...questions];
questionsShuffled.sort(comparador);

// !<------Flash Cards------>

const flashcards = [
    {
        questionNumber: 1,
        question: "",
        answer: ""
    },
    {
        questionNumber: 2,
        question: "",
        answer: ""
    },
    {
        questionNumber: 3,
        question: "",
        answer: ""
    },
    {
        questionNumber: 4,
        question: "",
        answer: ""
    },
    {
        questionNumber: 5,
        question: "",
        answer: ""
    },
    {
        questionNumber: 6,
        question: "",
        answer: ""
    },
    {
        questionNumber: 7,
        question: "",
        answer: ""
    },
    {
        questionNumber: 8,
        question: "",
        answer: ""
    }
]

questionsShuffled.forEach((question, index) => {
    flashcards[index].question = question.question;
    flashcards[index].answer = question.answer;
})


function DeckFlashCards() {

    const [contador, setContador] = useState(0);
    const [iconsAnswers, setIconsAnswers] = useState([])
    
    return (
        <>
        <div>
            <Header />
            <div className="flash-cards">
                {flashcards.map((flashcard) => (
                    <FlashCard key={flashcard.questionNumber} contador = {contador} setContador={setContador} iconsAnswers = {iconsAnswers} 
                    setIconsAnswers = {setIconsAnswers} questionNumber= {flashcard.questionNumber} question={flashcard.question} answer={flashcard.answer}/>
                ))}
            </div>
        </div>            
        <Footer contador = {contador} iconsAnswers = {iconsAnswers}/>
        </>
    );
}

export default DeckFlashCards;