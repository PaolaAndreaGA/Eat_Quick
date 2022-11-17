import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';


function LoginAdmon() {
  return (
    <Form className='container text-center'>
    <h1 className='mb-5'>Bienvenido</h1>
      <Form.Group className="container text center mb-3" controlId="formBasicEmail">
        <Form.Label><h3>Usuario</h3></Form.Label>
        <Form.Control className='shadow p-3 w-50 p-3 container text-center text-wrap size= "sm"' type="email" placeholder="Ingrese Email" />
        <Form.Text className="text-muted">
          No compartiremos su información con alguien más.
        </Form.Text>
      </Form.Group>
      <Form.Group className="container text center mb-4" controlId="formBasicPassword">
        <Form.Label><h3>Contraseña</h3></Form.Label>
        <Form.Control className='shadow p-3 w-50 p-3 container text-center text-wrap size= "sm"'  type="password" placeholder="Ingrese Contraseña"/>
      </Form.Group>
      <Link to="/admon/tools"> 
      <Button type="submit" className=" shadow p3 btn btn-info btn-lg border border-primary opacity-75">Ingresar</Button>
      </Link>
    </Form>
  );
}

export default LoginAdmon;