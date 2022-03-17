import { useState } from 'react';


function FlashCard(props) {

    const {questionNumber, question, answer} = props;

    const [stage, setStage] = useState("questionsList");

    if(stage === "questionsList") {
        return (
            <div className="flash-card">
                <p>{`Pergunta ${questionNumber}`}</p>
                <ion-icon name="play-outline" onClick={() => setStage("question")}></ion-icon>    
            </div>
        );
    }

    if(stage === "question") {
        return (
            <div className="flash-card-question">
                <p>{question}</p>
                <img src="assets/imgs/flip-flashcard-icon.png" alt="flip-card-icon" onClick={() => setStage("answer")} />   
            </div>
        );
    }

    if(stage === "answer") {
        return (
            <div className="flash-card-answer" onClick={() => setStage("")}>
                <p>{answer}</p>
                <div className="buttons-answer">
                    <button className="nao-lembrei">Não lembrei</button>
                    <button className="quase-lembrei">Quase não lembrei</button>
                    <button className="zap">Zap!</button>
                </div>   
            </div>
        );
    }
}

export default FlashCard;