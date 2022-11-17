import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


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
    <Form>
      <h1 className='container text-center'>{menu.title}</h1>
      <Form.Group className='container text-center p-3'>
        <Link to="/menu"> <Button type="submit" className="shadow p3 btn btn-info btn-sm border border-primary opacity-75">Volver al Menú</Button></Link>
      </Form.Group>
      <Form.Group className="d-block p-2 container border text-center w-50" controlId="formBasicMenuDetails">
        <img
          src={menu.imageUrl}
          width='380'
          height='200'
          className="img-fluid rounded-3"
        />
        <h3 className='card-title container text-center '>Especificaciones:</h3>
        <ul card-text>
          <li><h5>Combo: {menu.combo}</h5></li>
          <li><h5>Precio: {menu.price}</h5></li>
        </ul>
      </Form.Group>
      <Form.Group className='d-block p-2 container text-center p-3'>
        <select class="form-select container text-center w-25 p-0 mb-4" id="inputGroupSelect04">
          <option selected>Seleccionar...</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <Link to="/#"> <Button type="submit" className="shadow p4 btn btn-success btn-md opacity-75">Agregar</Button></Link>
      </Form.Group>
    </Form>
  );
}

export default DetailsPage;