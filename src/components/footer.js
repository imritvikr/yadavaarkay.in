import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

class Footer extends React.Component {
    render() {
        // const emailStyle = { padding: 5, display: 'flex', justifyContent: 'center', alignItems: 'center', color: "#989898" };
        const position = { position: 'relative', bottom: 0, color: "#989898", justifyContent: 'center', alignItems: 'center', padding: 15 };
        return (
            <Container style={position}>
                <Row>
                    <p>Feel free to reach out, always interested in intriguing conversations! ⚡</p>
                </Row>
                <Row>
                    <Col md={6} xs={12}>
                        <FaEnvelope /> <a href="mailto:yadav.aar.kay@outlook.com" target="_blank" rel="noreferrer">yadav.aar.kay@outlook.com</a> <br/>
                        <FaGithub /> <a href="https://github.com/yadavaarkay" target="_blank" rel="noreferrer"> yadavaarkay</a> <br />
                    </Col>
                    <Col md={6} xs={12}>
                        <FaTwitter /> <a href="https://twitter.com/yadavaarkay" target="_blank" rel="noreferrer"> yadavaarkay</a> <br />
                        <FaLinkedin /> <a href="https://linkedin.com/in/yadavaarkay" target="_blank" rel="noreferrer"> yadavaarkay</a>
                    </Col>
                </Row>
            </Container >
        );
    };
}

export default Footer;