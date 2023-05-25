import './App.css';
import Banner from './Componentes/banner';
import Footer from './Componentes/rodape';
import Menu from './Componentes/menu';

import { useState } from "react";
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Campanhas from './Pages/Campanhas';
import Contato from './Pages/Contato';
function App() {

    const [color, setColor] = useState("#e8e8d9");


    const TextoOpcoes = [
        { 'Titulo': 'HOME', 'Url': '/' }
        , { 'Titulo': 'BIOGRAFIA', 'Url': 'About' }
        , { 'Titulo': 'CAMPANHAS PUBLICITARIAS', 'Url': 'Campanhas' }
        , { 'Titulo': 'CONTATO', 'Url': 'Contato' }
    ];

    function mudarCor(cor) {
        setColor(cor)
    }
    return (
        <div className="App">
            <Banner>
            </Banner>
            <Menu
                TextoOpcoes={TextoOpcoes}
            />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="About" element={<About />} />
                <Route path="Campanhas" element={<Campanhas />} />
                <Route path="Contato" element={<Contato />} />
            </Routes>


           <Footer></Footer>
        </div>
    );
}

export default App;
