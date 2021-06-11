import "./Navbar.css";
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'

function Navigationbar() {

    return (
        <>
            <Navbar fixed="top" className="color-nav" variant="dark">
                <Navbar.Brand href="https://acmpesuecc.github.io/">
                    <img
                        alt="ACM PESUECC Logo"
                        // The image path is absolute and relative to the domain and main website
                        src="/img/acm_logo.png"
                        width="60"
                        height="60"
                        className="d-inline-block align-top"
                    />{' '}
                </Navbar.Brand>
                <a className="ml-auto" href="https://acmpesuecc.github.io/" >
                    <Button variant="outline-primary">Head Back to the Main Website</Button>
                </a>
            </Navbar>
            <br />
        </>
    )
}

export default Navigationbar;
