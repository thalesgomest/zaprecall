import Header from "./Header";
import FlashCard from "./FlashCard";

const flashcards = [
    {
        questionNumber: 1,
        question: "O que é JSX?",
        answer: "Uma extensão de linguagem do JavaScript"
    },
    {
        questionNumber: 2,
        question: "O React é __ ",
        answer: "uma biblioteca JavaScript para construção de interfaces"
    },
    {
        questionNumber: 3,
        question: "Componentes devem iniciar com __",
        answer: "letra maiúscula"
    },
    {
        questionNumber: 4,
        question: "Podemos colocar __ dentro do JSX",
        answer: "expressões"
    },
    {
        questionNumber: 5,
        question: "O ReactDOM nos ajuda __ ",
        answer: "interagindo com a DOM para colocar componentes React na mesma"
    },
    {
        questionNumber: 6,
        question: "Usamos o npm para __",
        answer: "gerenciar os pacotes necessários e suas dependências"
    },
    {
        questionNumber: 7,
        question: "Usamos props para __",
        answer: "passar diferentes informações para componentes "
    },
    {
        questionNumber: 8,
        question: "Usamos estado (state) para __",
        answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
    }
]

function DeckFlashCards() {
    return (
        <>
            <Header />
            <div className="flash-cards">
                {flashcards.map((flashcard) => (
                    <FlashCard key={flashcard.questionNumber} questionNumber= {flashcard.questionNumber} question={flashcard.question} answer={flashcard.answer}/>
                ))}
            </div>
        </>
    );
}

export default DeckFlashCards;