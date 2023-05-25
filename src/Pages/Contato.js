import * as React from 'react';
import hexToRgba from 'hex-to-rgba';
import { useState } from "react";
import Imagem from '../Componentes/Imagem';

export default function Contato(props) {
    const [color, setColor] = useState("#e8e8d9");
    function mudarCor(cor) {
        setColor(cor)
    }
    return (
        <div className="conteudo" style={{ backgroundColor: hexToRgba(color, '0.6') }}  >
            <input type='color' className='input-cor' value={color} onChange={evento => {
                mudarCor(evento.target.value);
            }} />
            <h1>Contato </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam lacus non pretium pharetra.
                Maecenas aliquam nulla rutrum fringilla sodales. Duis condimentum sollicitudin augue,
                sit amet ornare eros pretium sit amet. Fusce lacinia aliquet est at dictum. Morbi pharetra,
                arcu eu convallis congue, odio dolor consequat arcu, vitae ornare nisl lacus non libero. </p>

            <Imagem
                imagem="/imagens/foto3.png"
                alt="Terceira Foto"
            /><br></br><br></br>
        </div>
    );
}