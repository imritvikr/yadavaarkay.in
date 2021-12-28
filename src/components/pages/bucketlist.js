import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import config from "../../config"
class BucketList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null,
            done: 0,
            total: 0,
         }
      }

    async componentDidMount() {
        const state = await populateListState();
        this.setState(state);
    }

    render() {
        const data = this.state.data;
        const pad = { padding: 15, fontSize: 20 };
        return (
            <Container>
                {/* <h1>Bucket List</h1> */}
                <Row md={8} xs={12} style={pad}>
                    <Col>
                        I was inspired by Chip Hyuen's <a href="https://huyenchip.com/list-100/" target="_blank" rel="noreferrer"> List 100</a> to create and maintain a list.
                        We all have goals and plans towards getting a happy life. Everyone has their own perspective of happiness and success. Everyone has their own stuff to do
                        before they are drop dread.  Most of the things we want to do in our life are well within our capabilities but until we make a realistic plan for our goals,
                        they remain dreams. So, here I am, writing down the collection of all the crazy things I want to do and the moments I want to cherish.  <br />
                        Current status : {this.state.done} / {this.state.total}
                    </Col>
                </Row>
                <Row style={pad}>
                    <Col>
                        <ol>
                            {data?.values?.map((value) => {
                                return <li> {value[0]} {value[1]} </li>
                            })
                            }
                        </ol>
                    </Col>
                </Row>
            </Container>
        );
    }
}

async function populateListState() {
    const data = await  fetch(config.sheetLink)
    .then((response)=> {return response.json()});
    let done = 0;
    let total = 0;
    data.values.forEach(ele => {
        if (ele[1] === '✅') {
            done++;
        }
        total++;
    });
    return {
        data: data,
        done: done,
        total: total,
    }
}

export default BucketList;