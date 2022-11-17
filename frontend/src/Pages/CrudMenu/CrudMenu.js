import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function CrudMenu() {
  return (
    <Form className='container text-center'>
      <h1 className='mb-5'>Central Actualización del Menú</h1>
      <ButtonGroup className='mb-5' aria-label="Basic example">
        <Button className=" shadow p3 btn btn-warning btn-lg border border-primary opacity-75 text-light">Buscar Plato</Button>{' '}
        <Button className=" shadow p3 btn btn-primary btn-lg border border-primary opacity-75">Nuevo Plato</Button>{' '}
        <Button className=" shadow p3 btn btn-success btn-lg border border-primary opacity-75">Actualizar Plato</Button>{' '}
        <Button className=" shadow p3 btn btn-danger btn-lg border border-primary opacity-75">Eliminar Plato</Button>
      </ButtonGroup>
      <Form.Group as={Row} className="container border p-3 mb-3 bg-light text-dark " controlId="formPlaintextPassword">
        <Form.Label className='mb-3' column sm="2">
          <h4>ID: </h4>
        </Form.Label>
        <Col sm="10">
          <Form.Control className="text-muted" type="id" placeholder="Digite el ID del plato" />
        </Col>
        <Form.Label className='mb-3' column sm="2">
          <h4>Titulo: </h4>
        </Form.Label>
        <Col sm="10">
          <Form.Control className="text-muted" type="titulo" placeholder="Digite el Nombre del plato" />
        </Col>
        <Form.Label className='mb-3' column sm="2">
          <h4>Combo: </h4>
        </Form.Label>
        <Col sm="10">
          <Form.Control className="text-muted" type="combo" placeholder="Digite el combo del plato" />
        </Col>
        <Form.Label className='mb-3' column sm="2">
          <h4>Precio: </h4>
        </Form.Label>
        <Col sm="10">
          <Form.Control className="text-muted" type="precio" placeholder="Digite el precio del plato" />
        </Col>
        <Form.Label className='mb-3' column sm="2">
          <h4>link Imagen: </h4>
        </Form.Label>
        <Col sm="10">
          <Form.Control className="text-muted" type="link" placeholder="Digite la url de la imagen del plato" />
        </Col>
      </Form.Group>
      <Button type="send" className=" shadow p3 btn btn-success btn-lg border border-primary opacity-75">Enviar</Button>{' '}
      <Link to="/admon/tools">
      <Button type="return tools" className=" shadow p3 btn btn-info btn-lg border border-primary opacity-75">Volver a Herramientas</Button>{' '}
      </Link>
    </Form>
  );
}

export default CrudMenu;