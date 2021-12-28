import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        const noDecor = {color : "grey"};
        const selectedPage = this.props.page;
        return (
            <Navbar expand="lg" sticky="top">
                <Container >
                    <Navbar.Brand style={noDecor} href="/">Ramakant Yadav</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link style={noDecor} href="https://medium.com/@yadavaarkay" target="_blank"  rel="noreferrer"> Blog </Nav.Link>
                            <Nav.Link style={noDecor} href="https://ethereal-basket-74e.notion.site/Projects-85831f564d724f37b2f632eb3479e3e9" target="_blank"  rel="noreferrer"> Projects </Nav.Link>
                            {/* conditionally highlight page which is selected */}
                            <Nav.Link style={noDecor} href="https://ethereal-basket-74e.notion.site/Kahani-Aaj-Tak-4796ba6a90a74e08b66c38e8b5efb531" target="_blank" rel="noreferrer"> Kahani: Aaj Tak </Nav.Link>
                            <Nav.Link> <Link to='/recommendations' style={noDecor}> Recommendations</Link> </Nav.Link>
                            <Nav.Link> <Link to='/bucketlist' style={noDecor}> Dream 98</Link> </Nav.Link>
                            {/* <Nav.Link href="/resources"> Resources </Nav.Link> */}
                            <Nav.Link style={noDecor} href="https://drive.google.com/file/d/1JQTEtdM1rYQ8nQVCb4z12Xokr3C7MO0M/view?usp=sharing" target="_blank"  rel="noreferrer"> Resume </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Header;