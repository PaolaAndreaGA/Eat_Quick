import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import './DetailsPage.css';


const DetailsPage = () => {
  const { menu_id } = useParams();
  const [menu, setMenu] = useState({});

  const loadMenuDetails = () => {
    fetch(`http://localhost:5005/api/detallepedido/${menu_id}`)
      .then(res => res.json())
      .then(menu => setMenu(menu))
  }
loadMenuDetails();

return (
    <main className="menu-details">
    <h1>{menu.title}</h1>
    <img src={menu.imageUrl} />
    <article>
        <h3>Especificaciones:</h3>
        <ul>
            <li>Combo: {menu.combo}</li>
            <li>Precio: {menu.price}</li>
        </ul>
        <Link to="/menu"><button className='Bmenu'>Volver al menú</button></Link>
    </article>

</main>
  );
}

export default DetailsPage;