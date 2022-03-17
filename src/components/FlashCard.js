function FlashCard(props) {

    const {questionNumber, question, answer} = props;

    return (
        <div className="flash-card">
            <p>{`Pergunta ${questionNumber}`}</p>
            <ion-icon name="play-outline"></ion-icon>    
        </div>
    );
}

export default FlashCard;