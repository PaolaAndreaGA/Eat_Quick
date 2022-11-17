import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {
  return (
    <Form className='container text-center'>
      <h1 className='mb-10'>Bienvenido</h1>
      <Form.Group className=" mb-3" controlId="formBasicEmail">
        <Form.Label><h3>Nombre:</h3></Form.Label>
        <Form.Control className='shadow p-3 w-50 p-3 container text-center text-wrap' size="sm" type="name" placeholder="Ingrese por favor su nombre:"  />
      </Form.Group>
      <Form.Group className=" mb-3" controlId="formBasicPassword">
        <Form.Label><h3>No. de Mesa</h3></Form.Label>
        <Form.Control className='shadow p3 w-50 p-3 container text-center text-wrap' size="sm" type="password" placeholder="Ingrese el número de la mesa" />
      </Form.Group>
      <Link to="/menu">
        <Button type="submit" className="shadow p3 btn btn-info btn-lg border border-primary opacity-75">Enviar</Button>
      </Link>
    </Form>
  );
}

export default BasicExample;