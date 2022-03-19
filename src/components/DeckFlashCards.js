import Header from "./Header";
import FlashCard from "./FlashCard";
import Footer from "./Footer";
import { useState } from 'react';

const decks = {
jsx: [
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
],
css: [
    {
        question: "Como você sublinha o texto?",
        answer: "text-decoration: underline;"
    },
    {
        question: "Na hierarquia das regras CSS, qual é a sempre usada?",
        answer: "a mais específica"
    },
    {
        question: "Qual a função do Reset CSS?",
        answer: "É um arquivo que “limpa” os estilos padrões de todos os elementos HTML que já possuem uma formatação padrão"
    },
    {
        question: "Qual a extensão dos arquivos CSS?",
        answer: ".css"
    },
    {
        question: "Como podemos se conectar a um arquivo de estilos externo?",
        answer: "Usando a tag <link></link>"
    },
    {
        question: "Como fazer uma linha horizontal acima do elemento selecionado?",
        answer: "border: bottom: 1 px solid black;"
    },
    {
        question: "O que faz o valor border-box para box-sizing?",
        answer: "O box-sizing com o valor border-box faz com que o navegador não calcule a dimensão de um elemento somando bordas e margens com altura e largura."
    },
    {
        question: "Qual a sintaxe da pseudo-classe que seleciona o n-ésimo elemento em um grupo de elementos?",
        answer: "elemento:nth-child()"
    }
] 
}

// !<------Shuffled Questions------>

function comparador() { 
	return Math.random() - 0.5; 
}

// let questionsShuffled = [...questions];
// questionsShuffled.sort(comparador);

let questionsDecksShuffled = {...decks};
questionsDecksShuffled.jsx.sort(comparador);
questionsDecksShuffled.css.sort(comparador);


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

// questionsShuffled.forEach((question, index) => {
//     flashcards[index].question = question.question;
//     flashcards[index].answer = question.answer;
// })


function DeckFlashCards({deckAndMeta}) {
    if (deckAndMeta.deck === "jsx") {
        questionsDecksShuffled.jsx.forEach((question, index) => {
        flashcards[index].question = question.question;
        flashcards[index].answer = question.answer;
        })
    }
    if (deckAndMeta.deck === "css") {
        questionsDecksShuffled.css.forEach((question, index) => {
        flashcards[index].question = question.question;
        flashcards[index].answer = question.answer;
        })
    }

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
        <Footer contador = {contador} iconsAnswers = {iconsAnswers} meta={deckAndMeta.meta}/>
        </>
    );
}

export default DeckFlashCards;