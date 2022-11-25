import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Form';
function AdmonTools() {
  return (
    <Container className=' container text-center p-5'>
      <Link to="/admon/menucrud">
        <Button className='text center container border  p-4 mb-5 btn-lg w-50' variant="primary">Actualización Menú</Button>{' '}
      </Link>

      <Link to="/admon/ordertable">
        <Button className='text center  container border  p-4 mb-5  btn-lg w-50' variant="info">Gestion de Pedidos</Button>
      </Link>

    </Container>
  );
}

export default AdmonTools;