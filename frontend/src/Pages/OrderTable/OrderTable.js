import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function OrderTable() {
  return (
    <Form className='container text-center'>
      <h1 className='mb-5'>Central Gestión de pedidos</h1>
      <Table striped bordered hover variant="info">
        <thead>
          <tr>
            <th>No Mesa</th>
            <th>Pedido</th>
            <th>Total a pagar</th>
            <th>Tiempo de espera</th>
            <th>Estado pedido</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>5</td>
            <td>3 hambuerguesas clasicas - 3 combo (papas -Coca cola 350ml) </td>
            <td>71.000</td>
            <td>30 min</td>
            <td>Recibido</td>
          </tr>
          <tr>
            <td>3</td>
            <td>1 Hot Dog Gourmet combo (papas -Coca cola 350ml) </td>
            <td>18.500</td>
            <td>15 min</td>
            <td>En preparación</td>
          </tr>
          <tr>
            <td>2</td>
            <td>1 Pizza 4 quesos combo (Coca cola 4lt) </td>
            <td>64.500</td>
            <td>30 min</td>
            <td>Entregando</td>
          </tr>
        </tbody>
      </Table>
      <Link to="/admon/tools">
      <Button type="return tools" className=" shadow p3 btn btn-info btn-lg border border-primary opacity-75">Volver a Herramientas</Button>{' '}
      </Link>
    </Form>
  );
}

export default OrderTable;