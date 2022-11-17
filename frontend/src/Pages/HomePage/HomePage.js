import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Form';
function HomePage() {
  return (
    <Container className=' container text-center p-5'>
      <Link to="/client">
        <Button className='text center container border  p-4 mb-5 btn-lg w-50' variant="primary">Clientes</Button>{' '}
      </Link>

      <Link to="/admon">
        <Button className='text center  container border  p-4 mb-5  btn-lg w-50' variant="info">Administración</Button>{' '}
      </Link>

    </Container>
  );
}

export default HomePage;