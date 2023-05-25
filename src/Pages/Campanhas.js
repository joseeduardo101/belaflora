import * as React from 'react';
import hexToRgba from 'hex-to-rgba';
import { useState } from "react";
import Imagem from '../Componentes/Imagem';

export default function Campanhas(props) {
    const [color, setColor] = useState("#e8e8d9");
    const [cors, setCors] = useState('dark' + color);

    function mudarCor(cor) {
        setColor(cor)
        setCors(cor)
    }
    const cor = 'dark' + color;
    return (
        <div className="conteudo" style={{ backgroundColor: hexToRgba(color, '0.6') }}  >
            <input type='color' className='input-cor' value={color} onChange={evento => {
                mudarCor(evento.target.value);
            }} />
            <h1 style={{ color: cors }}>Campanhas publicitarias </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam lacus non pretium pharetra.
                Maecenas aliquam nulla rutrum fringilla sodales. Duis condimentum sollicitudin augue,
                sit amet ornare eros pretium sit amet. Fusce lacinia aliquet est at dictum. Morbi pharetra,
                arcu eu convallis congue, odio dolor consequat arcu, vitae ornare nisl lacus non libero. </p>
            <Imagem
                imagem="/imagens/foto1.png"
                alt="Primeira Foto"
            />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam lacus non pretium pharetra.
                Maecenas aliquam nulla rutrum fringilla sodales. Duis condimentum sollicitudin augue,
                sit amet ornare eros pretium sit amet. Fusce lacinia aliquet est at dictum. Morbi pharetra,
                arcu eu convallis congue, odio dolor consequat arcu, vitae ornare nisl lacus non libero. </p>
            <Imagem
                imagem="/imagens/foto2.png"
                alt="Segunda Foto"
            />

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam lacus non pretium pharetra.
                Maecenas aliquam nulla rutrum fringilla sodales. Duis condimentum sollicitudin augue,
                sit amet ornare eros pretium sit amet. Fusce lacinia aliquet est at dictum. Morbi pharetra,
                arcu eu convallis congue, odio dolor consequat arcu, vitae ornare nisl lacus non libero. </p>
            <Imagem
                imagem="/imagens/foto3.png"
                alt="Terceira Foto"
            />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam lacus non pretium pharetra.
                Maecenas aliquam nulla rutrum fringilla sodales. Duis condimentum sollicitudin augue,
                sit amet ornare eros pretium sit amet. Fusce lacinia aliquet est at dictum. Morbi pharetra,
                arcu eu convallis congue, odio dolor consequat arcu, vitae ornare nisl lacus non libero. </p>
                <br></br>
        </div>
    );
}