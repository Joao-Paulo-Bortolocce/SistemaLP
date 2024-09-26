import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export default function Menu(props) {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                {/* {<Navbar.Brand href="#"><Link style={{textDecoration: "none"}} to="/">Menu</Link></Navbar.Brand>} */}
                <Navbar.Brand href="#" as={Link} to="/">Menu</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Cadastros" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1"><Link to="/cliente">Clientes</Link></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1"><Link to="/fornecedor">Fornecedores</Link></NavDropdown.Item>
                            <NavDropdown.Item href="#"><Link to="/produto">Produtos</Link></NavDropdown.Item>
                            <NavDropdown.Item href="/categoria"><Link to="/categoria">Categorias</Link></NavDropdown.Item>
                            <NavDropdown.Item href="/categoria"><Link to="/usuario">Usuario</Link></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Operações" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Compra</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Venda</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Relatórios" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Clientes</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Fornecedores</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Estoque</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Vendas</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Compras</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#home">Sobre</Nav.Link>
                        <Nav.Link href="#home">Sair</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}