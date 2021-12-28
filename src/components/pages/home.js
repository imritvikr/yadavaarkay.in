import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import avatar from '../../static/avatar.jpg';
// import styles from '../../styles/home.css'

class Home extends React.Component {

    render() {
        const imageStyle = { display: 'flex', justifyContent: 'center', alignItems: 'center' };
        const textStyle = { display: 'flex', justifyContent: 'left', alignItems: 'center', fontSize: 20 };
        return (
            <Container>
                <Row>
                    <Col md={8} xs={12} style={textStyle}>
                        <p>
                            <br></br>
                            <br></br>
                            A humble boy, full of imperfections, trying to see this beautiful world with new eyes. <br /><br />
                            Hi! <br /><br />
                            I am Ramakant Yadav, Software Engineer by profession, trying to explore many things, one at a time.
                            <br /><br />
                            I graduated from IIT Ropar, India in 2020.  I explored various things during my college days and coding was one of them. 
                            I am fascinated by the digital revolution and the power of technology. I enjoy working on products which aims to ease our life through technology. 
                            I am very curious about the digital revolution and currently I am trying to dive deep into the digital world and
                            it’s revolutionary innovations(Blockchain, ML/AI, Metaverse and Crypto etc.). 
                            <br /><br />
                            I enjoy writing down my thoughts, which gives me time and space to process deep-seated emotions. Be it poetry, short story or a movie review,
                            I give them words that come right from my heart. In my spare time I create content for my YouTube channel(Business case studies, entrepreneurship, personal finance etc.).
                            I like reading non-fiction, watching thriller and biography, listening rock(and pop) and working out. Always up for bike trips.
                            <br /><br />
                            Fun Fact: Gardening was my childhood hobby and I have a garden of my own 😀
                            <br /><br />
                            Connect with me on <a href="https://www.linkedin.com/in/yadavaarkay/" target="_blank" rel="noreferrer">Linkedin</a> to stay in touch! 🔥
                        </p>
                    </Col>
                    <Col md={4} xs={0} style={imageStyle} >
                        <Image height="40%" src={avatar} alt="Ramakant Yadav Image" roundedCircle />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;