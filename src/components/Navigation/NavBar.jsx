import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle, NavLink } from 'react-bootstrap';
import './Nav.css';

const NavBar = () => {
  return (
    <header>
      <Navbar
        expand="lg"
        className="bg-white shadow-md"
        style={{ padding: '16px 24px' }}
      >
        <NavbarBrand
          style={{ color: '#0d6efd' }}
          className="font-bold text-2xl"
        >
          ShopEase
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <Nav className="flex gap-x-4">
            <NavLink>Home</NavLink>
            <NavLink>Products</NavLink>
            <NavLink>Contact</NavLink>
            <NavLink>
              <FontAwesomeIcon icon={faShoppingCart} />
            </NavLink>
            <NavLink>Login</NavLink>
            <NavLink>Signup</NavLink>
          </Nav>
        </NavbarCollapse>
      </Navbar>
    </header>
  );
};

export default NavBar;
