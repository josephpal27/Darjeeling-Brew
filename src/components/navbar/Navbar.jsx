import { useState } from "react";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Navbar.css";
import logo from "../../assets/images/logo/logo.avif";

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
                id="offcanvasNavbar-expand-lg"
                aria-labelledby="offcanvasNavbarLabel-expand-lg"
                placement="start"
            >
                <Offcanvas.Header>
                    <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                        <img src={logo} alt="logo" className="offCanvasLogo" />
                    </Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body>
                    <Nav className="justify-content-center flex-grow-1 nav">
                        <Nav.Link as={NavLink} to="/" onClick={handleClose}>
                            HOME
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/about" onClick={handleClose}>
                            ABOUT US
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/services" onClick={handleClose}>
                            SERVICES
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/contact" onClick={handleClose}>
                            CONTACT
                        </Nav.Link>
                    </Nav>

                    {/* Right Side */}
                    <div className="right-btn-wrapper">
                        <NavLink to="/contact" className="get-in-touch-btn">
                            GET IN TOUCH
                        </NavLink>
                    </div>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Navbar>
    );
};

export default MyNavbar;
