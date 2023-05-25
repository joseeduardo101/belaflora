import './conteudo.css'
import hexToRgba from 'hex-to-rgba';

const index = (props) => {


    return (
		<div className="conteudo" style={{backgroundColor: hexToRgba(props.cor, '0.6')}}   >
            <input type='color' className='input-cor' value={props.cor} onChange={evento => {
                props.mudarCor(evento.target.value);
            }} />
              <h1>Sobre Anna Bella </h1>
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
    )
}
export default index