import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function BrandExample() {
  return (
    <>
      <Navbar bg="transparent">
        <Container>
          <Navbar.Brand
            href="#home"
            className="container text-center"
          >
            <img
              src="https://w7.pngwing.com/pngs/485/93/png-transparent-fast-food-taco-hamburger-logo-shovel-food-text-hand-thumbnail.png"
              width="100"
              height="80"
              className="img-fluid rounded-3"
              alt="logo"
            />
            <h1>
              Food Truck New Generation
            </h1>
          </Navbar.Brand>
          <Link to="/"><Button type="button" class="btn btn-danger">Salir</Button></Link>
          

        </Container>

      </Navbar>

      <br />
    </>
  );
}

export default BrandExample;