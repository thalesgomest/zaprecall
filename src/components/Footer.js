let numberOfQuestions = 8;
let answers = [];
let contadorZap = 0;

function Footer({contador, setContador, iconsAnswers, setIconsAnswers, meta, deDeckAndMeta, setDeckAndMeta, setVisible}) {

    function restartRecall() {
        // setContador(0);
        // setIconsAnswers([]);
        // setDeckAndMeta({meta:"", deck:""});
        // setVisible(true);
        document.location.reload(true);
    }

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
        }
        for(let i=0; i<answers.length; i++) {
            if(answers[i] === "zap") contadorZap += 1;
        }
        if (answers.includes("nao-lembrei") === true) {
            if (meta === "") {
                return (
                    <footer className="final-msg">
                        <p>😢 <span>PUTZ!</span></p>
                        <p>Ainda faltaram alguns... Mas não desanime!</p>
                        <div className="icons-answer">
                            {iconsAnswers.map((answer) => answer)}
                        </div>
                        <button className="reiniciar" onClick={restartRecall}>REINICAR RECALL</button>
                    </footer>
                )
            } else {
                if(contadorZap >= parseInt(meta)) {
                    return (
                    <footer className="final-msg">
                        <p>😢 <span>PUTZ!</span></p>
                        <p>Ainda faltaram alguns... Mas não desanime!</p>
                        <p>Lado bom? Você atingiu sua meta de Zaps!</p>
                        <div className="icons-answer">
                            {iconsAnswers.map((answer) => answer)}
                        </div>
                        <button className="reiniciar" onClick={restartRecall}>REINICAR RECALL</button>
                    </footer>
                )
                } else {
                    return (
                    <footer className="final-msg">
                        <p>😢 <span>PUTZ!</span></p>
                        <p>Ainda faltaram alguns... Mas não desanime!</p>
                        <p>Meta de Zaps não atingida! Não desanime, a prática leva a perfeição!</p>
                        <div className="icons-answer">
                            {iconsAnswers.map((answer) => answer)}
                        </div>
                        <button className="reiniciar" onClick={restartRecall}>REINICAR RECALL</button>
                    </footer>
                )
                }
            }
        } else {
            if (meta === "") {
                return (
                    <footer className="final-msg" >
                        <p>🥳 <span>PARABÉNS!</span></p>
                        <p>Você não esqueceu de nenhum flashcard!</p>
                        <div className="icons-answer">
                            {iconsAnswers.map((answer) => answer)}
                        </div>
                        <button className="reiniciar" onClick={restartRecall}>REINICAR RECALL</button>
                    </footer>
                )
            } else {
                if(contadorZap >= parseInt(meta)) {
                    return (
                    <footer className="final-msg">
                        <p>🥳 <span>PARABÉNS!</span></p>
                        <p>Você não esqueceu de nenhum flashcard!</p>
                        <p>Quer ficar mais feliz ainda? Atingiu sua meta de Zaps!</p>
                        <div className="icons-answer">
                            {iconsAnswers.map((answer) => answer)}
                        </div>
                        <button className="reiniciar" onClick={restartRecall}>REINICAR RECALL</button>
                    </footer>
                )
                } else {
                    return (
                    <footer className="final-msg">
                        <p>🥳 <span>PARABÉNS!</span></p>
                        <p>Você não esqueceu de nenhum flashcard!</p>
                        <p>A meta de Zaps não foi atingida, mas estamos quase lá!</p>
                        <div className="icons-answer">
                            {iconsAnswers.map((answer) => answer)}
                        </div>
                        <button className="reiniciar" onClick={restartRecall}>REINICAR RECALL</button>
                    </footer>
                )
                }
            }
        }
    }
}

export default Footer;