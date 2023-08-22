import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navigationbar = () => {
  return (
    <Navbar fixed="top" collapseOnSelect className="nav" expand="sm">
      <Navbar.Brand>
        <NavLink
          className="home-button fixed-position"
          as={Link}
          to="/main-menu"
          exact={true}
          end
        >
          <img src="./csclub.svg" className="main-logo" alt="cs club logo" />
        </NavLink>
      </Navbar.Brand>

      <Navbar.Toggle
        aria-controls="navbarScroll"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
        className="nav-menu ms-auto"
      />

      <Navbar.Collapse id="navbarScroll">
        <Nav className="nav-items ms-auto">
          <NavLink className="nav-item" eventKey="1" as={Link} to="/about">
            About
          </NavLink>
          <NavLink className="nav-item" eventKey="2" as={Link} to="/events">
            Events
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigationbar;
