import './menu.css'

const index = (props) => {
    return (
        <div className="App-header">
            <ul className="App-headerUl">
                {props.TextoOpcoes.map((texto) => (
                    <li className='_Li' alt='Menu' key={texto.Titulo}>
                       <a href={texto.Url} alt={texto.Titulo}>{texto.Titulo}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default index