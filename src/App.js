import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Navbar, Nav, Form, Spinner } from 'react-bootstrap';
import Home from "./views/Home.js";

function App() {
  return (
    <div>
      <Navbar className="navbar-linear" variant="light">
        <Container fluid>
          <Navbar.Brand href="/"> <h3> Simple Task Board </h3> </Navbar.Brand>
        </Container>
      </Navbar>
      <Home />
    </div>
  );
}

export default App;
