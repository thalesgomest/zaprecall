let numberOfQuestions = 8;

function Footer({contador, iconsAnswers}) {
    return (
        <footer>
            <p>{contador}/{numberOfQuestions} CONCLUÍDOS</p>
            <div className="icons-answer">
                {iconsAnswers.map((answer) => answer)}
            </div>
        </footer>
    );
}

export default Footer;