
import { useState } from "react";

function sobre() {

    const [color, setColor] = useState("#e8e8d9");


    const TextoOpcoes = [
        { 'Titulo': 'HOME', 'Url': '#Home' }
        , { 'Titulo': 'BIOGRAFIA', 'Url': 'https://www.uol.com.br/' }
        , { 'Titulo': 'CAMPANHAS PUBLICITARIAS', 'Url': 'https://www.uol.com.br/' }
        , { 'Titulo': 'CONTATO', 'Url': 'https://www.uol.com.br/' }
    ];

    function mudarCor(cor) {
        setColor(cor)
    }
    return (
        <div className="App">
     <h1> Sobre </h1>
        </div>
    );
}

export default sobre;
