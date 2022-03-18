let numberOfQuestions = 8;
let answers = []

function Footer({contador, iconsAnswers}) {
    if(contador !== numberOfQuestions) {
        return (
            <footer>
                <p>{contador}/{numberOfQuestions} CONCLUÍDOS</p>
                <div className="icons-answer">
                    {iconsAnswers.map((answer) => answer)}
                </div>
            </footer>
        );
    } else {
        for(let i=0; i<iconsAnswers.length; i++) {
        let answer = iconsAnswers[i].props.id;
        answers.push(answer);
        console.log(answers);
    }
        if (answers.includes("nao-lembrei") === true) {
            return (
                <footer className="final-msg">
                    <p>😢 <span>PUTZ!</span></p>
                    <p>Ainda faltaram alguns... Mas não desanime!</p>
                    <div className="icons-answer">
                        {iconsAnswers.map((answer) => answer)}
                    </div>
                </footer>
            )
        } else {
            return (
                <footer className="final-msg" >
                    <p>🥳 <span>PARABÉNS!</span></p>
                    <p>Você não esqueceu de nenhum flashcard!</p>
                    <div className="icons-answer">
                        {iconsAnswers.map((answer) => answer)}
                    </div>
                </footer>
            )
        }
    }
}

export default Footer;