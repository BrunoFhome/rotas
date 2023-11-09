import {Link} from 'react-router-dom';
import './style.css';
function Contato(){
    return(

        

            <div  className='contato-css'>
                <h1>Página de Contato</h1>
                
                
                <div className='lista'>
                    <ul>
                        <li>Email: apenastestando@gmail.com</li>
                        <li>Telefone: 42 9192310242</li>
                        <li>Instagram: @apenasumteste</li>
                    </ul>        
                </div>
                <Link to="/">Home</Link>
                <br/>
                <Link to="/sobre">Sobre</Link>
               
                <Link to="/produto">Acessar Produto</Link>
            </div>

        
    );
}

export default Contato;