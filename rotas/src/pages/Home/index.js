import {Link} from 'react-router-dom';
import './style.css';
function Home(){
    return(
        <div className ="csshome">
            <div className='welcome'>
                <h1>Sejam bem-vindos(s)</h1>
            </div>
            <br/>
            <div className='padrao'>
                <h2><span><em>Bruno Thomé</em></span></h2>
            </div>
            <br/>
            <Link to="/sobre" className='alteralink'>Sobre</Link>
            
            <Link to="/contato" className='alteralink'>Contato</Link>
  
            <Link to="/produto" className='alteralink'>Acessar Produto</Link>
        </div>
    );
}

export default Home;