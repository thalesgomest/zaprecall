let numberOfQuestions = 8;
let completedQuestions = 0;


function Footer() {
    return (
        <footer>
            <p>{completedQuestions}/{numberOfQuestions} CONCLUÍDOS</p>
        </footer>
    );
}

export default Footer;