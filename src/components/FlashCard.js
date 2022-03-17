import { useState } from 'react';


function FlashCard(props) {

    const {questionNumber, question, answer} = props;

    const [stage, setStage] = useState("questionsList");


    // const answeredQuestions = [
    //     {
    //         typeof: "não-lembrei-answered",
    //         icon:  '<ion-icon name="close-circle"></ion-icon>'
    //     },
    //     {
    //         typeof: "quase-lembrei-answered",
    //         icon:  '<ion-icon name="help-circle"></ion-icon>'
    //     },
    //     {
    //         typeof: "zap-answered",
    //         icon:  '<ion-icon name="checkmark-circle"></ion-icon>'
    //     }
    // ]


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
            <div className="flash-card-answer">
                <p>{answer}</p>
                <div className="buttons-answer">
                    <button className="nao-lembrei" onClick={() => setStage("answered-nao-lembrei")}>Não lembrei</button>
                    <button className="quase-lembrei" onClick={() => setStage("answered-quase-lembrei")}>Quase não lembrei</button>
                    <button className="zap" onClick={() => setStage("answered-zap")}>Zap!</button>
                </div>   
            </div>
        );
    }

    if(stage === "answered-nao-lembrei") {
        return (
            <div className="flash-card-answered nao-lembrei">
                <p>{`Pergunta ${questionNumber}`}</p>
                <ion-icon name="close-circle"></ion-icon>    
            </div>
    )
    }

    if(stage === "answered-quase-lembrei") {
        return (
            <div className="flash-card-answered quase-lembrei">
                <p>{`Pergunta ${questionNumber}`}</p>
                <ion-icon name="help-circle"></ion-icon>    
            </div>
    )
    }

    if(stage === "answered-zap") {
        return (
            <div className="flash-card-answered zap">
                <p>{`Pergunta ${questionNumber}`}</p>
                <ion-icon name="checkmark-circle"></ion-icon>    
            </div>
    )
    }
}
export default FlashCard;