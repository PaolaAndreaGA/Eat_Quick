import { useState } from 'react';
import { Link } from 'react-router-dom';
import './MenuPage.css';
const MenuPage = () => {
  const [menu, setMenu] = useState([]);

  const loadMenu = () => {

    fetch('http://localhost:5005/api/menu')
      .then(res => res.json())
      .then(allMenu => setMenu(allMenu))
  }
  loadMenu()

  return (
    <main>
      <div className="menu-container">
        <h1 className='title-menu'>Menú</h1>
        <Link to="/"> <button className="inicio">Volver al Inicio</button></Link>
        {menu.map(eachMenu => {
          return (
            <Link to={`/orden/${eachMenu._id}`}>
              <article className='menu-card'>
                <h3>{eachMenu.title}</h3>
                <img src={eachMenu.imageUrl}></img>
              </article>
            </Link> 
          )})}
            </div>
    </main>
  );
}

export default MenuPage;