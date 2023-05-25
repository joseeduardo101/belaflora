import * as React from 'react';
import { Link } from 'react-router-dom';
import Conteudo from '../Componentes/conteudo';
import { useState } from "react";
export default function Home() {
    const [color, setColor] = useState("#e8e8d9");
    function mudarCor(cor) {
        setColor(cor)
    }
    return (
        <div>
           <Conteudo
                mudarCor={mudarCor}
                cor={color}
            />    

        </div>
    );
}