import axios from 'axios';
import React from 'react'; 
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import wings from '../logo1.webp';

function NavBar() {
    const navigate = useNavigate(); // Use useNavigate for redirection

    const handleContactClick = () => {
        navigate('/'); // Redirect to home first if needed
        setTimeout(() => {
            const footerElement = document.getElementById('footer'); // Ensure the footer has this ID
            if (footerElement) {
                footerElement.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.error("Footer element not found");
            }
        }, 100); // Delay for navigation
    };

    return (
        <Navbar expand="lg" className="bg-body-tertiary" style={{ border: '1px solid rgba(0, 0, 0, 0.1)',backgroundColor: '#d3d3d3' }}>
            <Container fluid>
                <Navbar.Brand className="d-flex align-items-center">
                    <img src={wings} alt="Logo" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
                    <div style={{ textAlign: 'left' }}>
                        <div style={{ fontSize: '1.25rem', color: 'black', fontWeight: 'bold', lineHeight: '1.2' }}>SHRISHA</div>
                        <div style={{ fontSize: '1rem', color: 'black', lineHeight: '1.2' }}>GROUP OF</div>
                        <div style={{ fontSize: '0.875rem', color: 'black' }}>PACKAGING</div>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto">
                        <Nav.Link 
                          href="/" 
                          className="mx-3" 
                          style={{ color: 'black', fontSize: '1.4rem', transition: 'font-weight 0.3s' }} 
                          onMouseEnter={(e) => e.target.style.fontWeight = 'bold'} 
                          onMouseLeave={(e) => e.target.style.fontWeight = 'normal'}
                        >
                          Home
                        </Nav.Link>
                        <Nav.Link 
                          href="/aboutus" 
                          className="mx-3" 
                          style={{ color: 'black', fontSize: '1.4rem', transition: 'font-weight 0.3s' }} 
                          onMouseEnter={(e) => e.target.style.fontWeight = 'bold'} 
                          onMouseLeave={(e) => e.target.style.fontWeight = 'normal'}
                        >
                          About Us
                        </Nav.Link>
                        <Nav.Link 
                          onClick={handleContactClick} 
                          className="mx-3" 
                          style={{ color: 'black', fontSize: '1.4rem', cursor: 'pointer', transition: 'font-weight 0.3s' }} 
                          onMouseEnter={(e) => e.target.style.fontWeight = 'bold'} 
                          onMouseLeave={(e) => e.target.style.fontWeight = 'normal'}
                        >
                          Contact Us
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
