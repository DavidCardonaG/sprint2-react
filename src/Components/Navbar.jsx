import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
  return (
    <Navbar id="navbar" class="navbar-nav mx-auto"  bg="black" variant="dark">
      <Container>
        <Navbar.Collapse >
          <Nav id="nav" className="justify-content-center" >
          <NavDropdown title="NOSOTROS" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Quienes Somos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Historial De Politicas
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="SERVICIOS" class="text-white" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Mensajeria(-5K)</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Envios de Carga(+5K)
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Tramites y Servicios
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="CONSULTA" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Estado del Envio</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Envios en Rezago
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Clientes</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              Certificaciones
              </NavDropdown.Item>
            </NavDropdown>
            <img id="logo" src="https://res.cloudinary.com/cardonagarciadavid11/image/upload/v1668995094/logoInsta_frhhsn.png"></img>
            <Nav.Link href="#features">AUTOENVIOS</Nav.Link>
          <NavDropdown title="ÚNETE" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Ser Aliado</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Ser Agencia Comercial
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Trabaja con Nosotros</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="CONTÁCTANOS" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Aliado Comercial</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Formulario de Contacto
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Quejas y Sugerencias</NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;