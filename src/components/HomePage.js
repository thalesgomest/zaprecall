import { useState } from 'react';

function HomePage() {

    const [visible, setVisible] = useState(true);

    return (
        visible === true ? 
        <div className="home-page">
            <img src="assets/imgs/logo-zaprecall.png" alt="logo-zaprecall" />
            <h1>ZapRecall</h1>
            <button onClick={() => setVisible(false)}>Iniciar Recall!</button>
        </div>
        : <></>
    );
}

export default HomePage;