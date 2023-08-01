import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.css";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { useAppContext } from "./context/appContext";

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
></link>;

export function Nevigationbar() {
  const { user } = useAppContext();
  return (
    <Navbar bg="danger" variant="dark" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#"> MANDAP</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px", fontSize: "200%" }}
            navbarScroll
          >
            <Nav.Link href="#action1" style={{ marginLeft: "600px" }}>
              <Link to="/" style={{ color: "White ", textDecoration: "none" }}>
                Home
              </Link>
            </Nav.Link>
            <LinkContainer to={"/ContactUs"} className="links">
              <Nav.Link>ContacUs</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/search"} className="links">
              <Nav.Link>Search</Nav.Link>
            </LinkContainer>
            <NavDropdown title="More" id="navbarScrollingDropdown">
              {!user ? (
                <NavDropdown.Item>
                  <Link to="/login">Log In</Link>
                </NavDropdown.Item>
              ) : (
                <NavDropdown.Item>
                  <Link to="/logout">Log Out</Link>
                </NavDropdown.Item>
              )}

              {!user ? (
                <NavDropdown.Item>
                  <Link to="/register">Register</Link>
                </NavDropdown.Item>
              ) : (
                <NavDropdown.Item>
                  <Link to="/profile">Profile</Link>
                </NavDropdown.Item>
              )}

              <NavDropdown.Item>
                <Link to="/admin">Admin</Link>
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link to={!user ? "/login" : "/add-booking"}>Book</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={!user ? "/login" : "/bookings"}>Bookings</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <LinkContainer to={"/AllFeedback"} className="links">
              <Nav.Link>Feedback</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Nevigationbar;
/* const Css =styled.Navbar`

`; */
