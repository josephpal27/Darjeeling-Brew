import { useState } from "react";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Navbar.css";
import logo from "../../assets/images/logo/logo.avif";
import { GoSearch } from "react-icons/go";
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
                            Home
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/origin-of-the-brew" onClick={handleClose}>
                            Origin of the Brew
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/products" onClick={handleClose}>
                            Products
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/darjeeling-story" onClick={handleClose}>
                            Darjeeling Story
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/about-us" onClick={handleClose}>
                            About Us
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/art-of-brewing" onClick={handleClose}>
                            Art of Brewing
                        </Nav.Link>
                    </Nav>

                    {/* Right Side */}
                    <div className="right-btn-wrapper">
                        <div className="search-btn">
                            <GoSearch className="nav-icon" />
                        </div>
                        <NavLink to="/cart" className="cart-btn" onClick={handleClose}>
                            <BsHandbag className="nav-icon" />
                        </NavLink>
                        
                    </div>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Navbar>
    );
};

export default MyNavbar;
