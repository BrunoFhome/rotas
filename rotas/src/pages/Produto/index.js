import {Link} from 'react-router-dom';
function Produto(){
    return(
        <div>
            <h1>Página de Produto</h1>

            <span>Meu Produto!</span>
            <br/>

            <Link to="/">Home</Link>

            <br/>

            
            <Link to="/sobre">Sobre</Link>

            <br/>
            <Link to="/contato">Contato</Link>

            
        </div>
    );
}

export default Produto;