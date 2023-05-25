import './Imagem.css'

const index = (props) => {
    return (
        <div className="div-imagem">
            <img src={props.imagem} alt={props.alt} />
        </div>
    )
}
export default index