import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const MenuPage = () => {
  const [menu, setMenu] = useState([]);

  const loadMenu = () => {

    fetch('http://localhost:5005/api/menu')
      .then(res => res.json())
      .then(allMenu => setMenu(allMenu))
  }
  loadMenu()

  return (
      <Form>
      <Form.Group className=" container text-center mb-3" controlId="formBasicTitle">
      <h1 className='mb-3'>Menú</h1>
        <Link to="/"> <Button type="submit" className="shadow p3 btn btn-info btn-md border border-primary opacity-75">Volver al Inicio</Button></Link>
        </Form.Group>
        {menu.map(eachMenu => {
          return (
            <Link to={`/orden/${eachMenu._id}`}>
              <Form.Group className="d-flex align-items-center container border w-auto p-1 mb-4" controlId="formBasicMenuCard">
                <img
                  src={eachMenu.imageUrl}
                  width='180'
                  height='100'
                  className="img-fluid rounded-3"
                >
                </img>
                <h5 className='flex-grow-1 ms-4'>{eachMenu.title}</h5>
              </Form.Group>
            </Link>
          )
        })}
      </Form>
  );
}
export default MenuPage;