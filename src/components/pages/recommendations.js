import React from 'react';
import { Container, Col, Row, ListGroup } from 'react-bootstrap';
import nonFiction from '../../static/nonFiction.json'

class Recommendations extends React.Component {
    render() {
        const pad = { padding: 25, fontSize: 20};
        const blackStyle = { color: 'white', 'background-color': 'inherit' };
        return (
            <Container>

                <Row>
                    <Col md={4} xs={12} style={pad}>
                        <h3>Music</h3>
                        <div style={blackStyle}>
                            <ListGroup variant="flush">
                                <ListGroup.Item style={blackStyle}> <iframe src="https://open.spotify.com/embed/track/0yc6Gst2xkRu0eMLeRMGCX" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe></ListGroup.Item>
                                <ListGroup.Item style={blackStyle}> <iframe src="https://open.spotify.com/embed/track/5O2P9iiztwhomNh8xkR9lJ" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe></ListGroup.Item>
                                <ListGroup.Item style={blackStyle}> <iframe src="https://open.spotify.com/embed/track/1dtx9AyVFLG001tZ6aNIAf" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe></ListGroup.Item>
                                <ListGroup.Item style={blackStyle}> <iframe src="https://open.spotify.com/embed/track/20mLcWdIpEZWVpzboSZJil" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe></ListGroup.Item>
                                <ListGroup.Item style={blackStyle}> <iframe src="https://open.spotify.com/embed/track/6XQHlsNu6so4PdglFkJQRJ" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe></ListGroup.Item>
                            </ListGroup>
                        </div>
                        
                    </Col>

                    <Col md={4} xs={12} style={pad}>
                        <h3>Books</h3>
                        <ol >
                            <Row>
                                <ListGroup variant="flush">
                                    {nonFiction["col1"].map((item) => {
                                        return <ListGroup.Item style={blackStyle}>
                                            <li  >{item.book}, {item.author}</li>
                                        </ListGroup.Item>
                                    })}
                                </ListGroup>
                            </Row>
                        </ol>
                    </Col>

                    <Col md={4} xs={12} style={pad}>
                        <h3>People I Admire</h3>
                        <ol >
                            <Row>
                                <ListGroup variant="flush">
                                    {nonFiction["col2"].map((item) => {
                                        return <ListGroup.Item style={blackStyle}>
                                            <li  >{item.people} <a href={item.wiki} target="_blank" rel="noreferrer">
                                                (Wiki) </a>
                                            </li>
                                        </ListGroup.Item>
                                    })}
                                </ListGroup>
                            </Row>
                        </ol>
                    </Col>
                </Row >

                <Row>
                    <Col md={3} xs={12} style={pad}>
                        <h3>Wellness</h3>
                        <ListGroup variant="flush" >
                            <ListGroup.Item style={blackStyle}><a href="https://www.bornfitness.com/bodyweight-exercises/" target="_blank" rel="noreferrer">
                                Bodyweight Exercises </a></ListGroup.Item>
                            <ListGroup.Item style={blackStyle}><a href="https://www.badyogi.com/blog/category/100-pose-tutorials/" target="_blank" rel="noreferrer">
                                100 Pose Tutorials - Yoga </a></ListGroup.Item>
                            <ListGroup.Item style={blackStyle}><a href="https://www.theinnerhour.com/blog/are-we-chasing-unhappiness" target="_blank" rel="noreferrer">
                                Are We Chasing Unhappiness?</a></ListGroup.Item>
                            <ListGroup.Item style={blackStyle} ><a href="https://www.habitstrong.com/resources/" target="_blank" rel="noreferrer">
                                How We Obsess Over What We Don’t Have</a></ListGroup.Item>
                            <ListGroup.Item style={blackStyle}><a href="https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/exercise/art-20048389" target="_blank" rel="noreferrer">
                                7 Benefits Of Regular Physical Activity </a></ListGroup.Item>
                            <ListGroup.Item style={blackStyle}><a href="https://www.pursuit-of-happiness.org/history-of-happiness/buddha/" target="_blank" rel="noreferrer">
                                Buddha And Path To Happiness</a></ListGroup.Item>
                        </ListGroup>
                    </Col>
                    {/* conditionally highlight page which is selected */}
                    <Col md={3} xs={12} style={pad}>
                        <h3>Movies</h3>
                        <ListGroup variant="flush">
                            <ListGroup.Item style={blackStyle} >Gandhi</ListGroup.Item>
                            <ListGroup.Item style={blackStyle} >The Man Who Knew Infinity</ListGroup.Item>
                            <ListGroup.Item style={blackStyle}>The Theory of Everything</ListGroup.Item>
                            <ListGroup.Item style={blackStyle} >The Imitation Game</ListGroup.Item>
                            <ListGroup.Item style={blackStyle}>A Beautiful Mind</ListGroup.Item>
                            <ListGroup.Item style={blackStyle}>Invictus</ListGroup.Item>
                            <ListGroup.Item style={blackStyle}>Three Idiots</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={3} xs={12} style={pad}>
                        <h3>TV Shows</h3>
                        <ListGroup variant="flush">
                            <ListGroup.Item style={blackStyle} >Peaky Blinders</ListGroup.Item>
                            <ListGroup.Item style={blackStyle} >Narcos</ListGroup.Item>
                            <ListGroup.Item style={blackStyle}>Breaking Bad</ListGroup.Item>
                            <ListGroup.Item style={blackStyle}>Money Heist</ListGroup.Item>
                            <ListGroup.Item style={blackStyle}>Vikings</ListGroup.Item>
                            <ListGroup.Item style={blackStyle}>House of Cards</ListGroup.Item>
                            <ListGroup.Item style={blackStyle}>Game of Thrones</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={3} xs={12} style={pad}>
                        <h3>Blog Posts</h3>
                        <ListGroup variant="flush">
                            <ListGroup.Item style={blackStyle}><a href="https://alum.mit.edu/slice/graduates-lessons-mit-alumni" target="_blank" rel="noreferrer">
                                Lessons from MIT Alumni</a></ListGroup.Item>
                            <ListGroup.Item style={blackStyle}><a href="https://medium.com/personal-growth/9-uncomfortable-truths-you-should-accept-early-in-life-7f61c13afdd1/" target="_blank" rel="noreferrer">
                                9 Uncomfortable Truths You Should Accept Early in Life</a></ListGroup.Item>
                            <ListGroup.Item style={blackStyle}><a href="https://medium.com/swlh/the-power-of-doing-nothing-at-all-73eeea488b8b" target="_blank" rel="noreferrer">
                                The power of doing nothing at all</a></ListGroup.Item>
                            <ListGroup.Item style={blackStyle}><a href="https://www.mindful.org/an-introduction-to-mindful-gratitude/" target="_blank" rel="noreferrer">
                                How to Practice Gratitude</a></ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container >
        );
    }
}

export default Recommendations;