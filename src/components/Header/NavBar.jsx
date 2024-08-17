'use client';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Nav, Navbar, NavDropdown, Spinner } from 'react-bootstrap';
import { useUser } from '@auth0/nextjs-auth0/client';
import './header.css';

const NavBar = () => {
  const { user, error, isLoading } = useUser();

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <header>
      <Navbar
        expand="lg"
        className="bg-white shadow-md"
        style={{ padding: '16px 24px' }}
      >
        <Navbar.Brand
          style={{ color: '#0d6efd' }}
          className="font-bold text-2xl"
        >
          ShopEase
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="flex gap-x-4">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/cart">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Nav.Link>
            {isLoading ? (
              <Spinner animation="border" />
            ) : user ? (
              <NavDropdown title="Account">
                <NavDropdown.Item href="">Profile</NavDropdown.Item>
                <NavDropdown.Item href="">Orders</NavDropdown.Item>
                <NavDropdown.Item href="/api/auth/logout">
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <>
                <Nav.Link href="/api/auth/login">Login</Nav.Link>
                <Nav.Link href="/api/auth/signup">Signup</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default NavBar;
