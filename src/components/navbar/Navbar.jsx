import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";
import logo from "../../assets/images/logo/logo.avif";
import { BsHandbag } from "react-icons/bs";

const MyNavbar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Navbar expand="lg" className="navbar">
            <Navbar.Brand as={NavLink} to="/" className="nav-brand">
                <img src={logo} alt="logo" loading="eager" />
            </Navbar.Brand>

            {/* Toggle button opens Offcanvas */}
            <Navbar.Toggle onClick={handleShow} />

            <Navbar.Offcanvas
                show={show}
                onHide={handleClose}
                scroll={true}
                backdrop={true}
                enforceFocus={false}
                restoreFocus={false}
                autoFocus={false}
                placement="start"
                id="offcanvasNavbar-expand-lg"
                aria-labelledby="offcanvasNavbarLabel-expand-lg"
            >
                <Offcanvas.Header>
                    <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                        <img src={logo} alt="logo" className="offCanvasLogo" />
                    </Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body>
                    <Nav className="justify-content-center flex-grow-1 nav">
                        <Nav.Link as={NavLink} to="/" onClick={handleClose}>
                            Home
                        </Nav.Link>
                        <Nav.Link as={HashLink} smooth to="/our-products" onClick={handleClose}>
                            Our Products
                        </Nav.Link>
                        {/* Bootstrap Dropdown */}
                        <NavDropdown title="About Us" id="navbarDropdown">
                            <NavDropdown.Item as={NavLink} to="/vision" onClick={handleClose}>
                                Vision
                            </NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/mission" onClick={handleClose}>
                                Mission
                            </NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/sustainability" onClick={handleClose}>
                                Sustainability
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={HashLink} smooth to="/ultimate-beverage" onClick={handleClose}>
                            The Ultimate Beverage
                        </Nav.Link>
                        <Nav.Link as={HashLink} smooth to="/art-of-brewing" onClick={handleClose}>
                            Art of Brewing
                        </Nav.Link>
                        {/* Bootstrap Dropdown */}
                        <NavDropdown title="Recipes" id="navbarDropdown">
                            <NavDropdown.Item as={NavLink} to="/hot-brew" onClick={handleClose}>
                                Hot Brew
                            </NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/cold-brew" onClick={handleClose}>
                                Cold Brew
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={HashLink} smooth to="/#" onClick={handleClose}>
                            Contact
                        </Nav.Link>
                    </Nav>

                    {/* Right Side */}
                    <div className="right-btn-wrapper">
                        <NavLink to="/#" className="cart-btn" onClick={handleClose}>
                            <BsHandbag className="nav-icon" />
                        </NavLink>
                    </div>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Navbar>
    );
};

export default MyNavbar;
