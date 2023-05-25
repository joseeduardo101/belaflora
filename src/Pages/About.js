import * as React from 'react';
import { Link } from 'react-router-dom';
import hexToRgba from 'hex-to-rgba';
import { useState } from "react";
export default function About(props) {
    const [color, setColor] = useState("#e8e8d9");
    function mudarCor(cor) {
        setColor(cor)
    }
    return (
        <div className="conteudo" style={{ backgroundColor: hexToRgba(color, '0.6') }}  >
            <input type='color' className='input-cor' value={color} onChange={evento => {
               mudarCor(evento.target.value);
            }} />
            <h1>Biografia </h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam lacus non pretium pharetra.
                  Maecenas aliquam nulla rutrum fringilla sodales. Duis condimentum sollicitudin augue,
                  sit amet ornare eros pretium sit amet. Fusce lacinia aliquet est at dictum. Morbi pharetra,
                  arcu eu convallis congue, odio dolor consequat arcu, vitae ornare nisl lacus non libero. </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam lacus non pretium pharetra.
                  Maecenas aliquam nulla rutrum fringilla sodales. Duis condimentum sollicitudin augue,
                  sit amet ornare eros pretium sit amet. Fusce lacinia aliquet est at dictum. Morbi pharetra,
                  arcu eu convallis congue, odio dolor consequat arcu, vitae ornare nisl lacus non libero. </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam lacus non pretium pharetra.
                  Maecenas aliquam nulla rutrum fringilla sodales. Duis condimentum sollicitudin augue,
                  sit amet ornare eros pretium sit amet. Fusce lacinia aliquet est at dictum. Morbi pharetra,
                  arcu eu convallis congue, odio dolor consequat arcu, vitae ornare nisl lacus non libero. </p>
          </div>
    );
}