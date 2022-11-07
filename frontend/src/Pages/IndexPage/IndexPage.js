import './IndexPage.css';
import { Link } from 'react-router-dom';
const IndexPage = () => {
  return (
    <main>
      <div>
        <h1 className="bienvenido">Bienvenido</h1>
        <p className="nombre">Ingrese su Nombre:</p>
        <input className="nombrebox" type="text" />
        <p className="mesa">Ingrese el No de la mesa:</p>
        <input className="mesabox" type="text" />
        <Link to="/menu"> <button className="enviar">Enviar</button></Link>
      </div>
    </main>
  );
}

export default IndexPage;