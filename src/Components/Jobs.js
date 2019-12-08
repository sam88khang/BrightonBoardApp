import React, { useState } from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import '../App.css';
export default function Jobs() {
    return (
        <div className='page'>
            <div className="page-title">Job List</div>
            <Button href="advertise_jobs" variant="outline-success">Advertise Jobs</Button>
            <Container >
            <Row>
                <Col >
            <Card  bg="light" border="success" style={{ height: '20em', width: '18rem' ,marginTop: '0.8rem'}}>

                <Card.Body>
                    <Card.Header style={{fontSize: '1.25em', fontColor: "blue", backgroundColor: '#228B22'}}>Junior Data Scientist</Card.Header>
                    <Card.Text>
                        skills? or just some descriptions?
                        skills? or just some descriptions?
                        skills? or just some descriptions?
                        skills? or just some descriptions?

    </Card.Text>
                    <Button variant="dark" style = {{marginLeft: '0.8rem'}}>Apply</Button>
                    <Button variant="dark" style = {{marginLeft: '0.8rem'}}>Save Job</Button>
                </Card.Body>
            </Card>
            </Col>
            <Col>

            <Card  bg="light" border="success" style={{ height: '20em', width: '18rem' ,marginTop: '0.8rem'}}>

                <Card.Body>
                <Card.Header className = "card-title">Kang's Boyfriend</Card.Header>
                    <Card.Text>
                        skills? or just some descriptions?
                        skills? or just some descriptions?
                        skills? or just some descriptions?
                        skills? or just some descriptions?

    </Card.Text>
                    <Button variant="dark" style = {{marginLeft: '0.8rem'}}>Apply</Button>
                    <Button variant="dark" style = {{marginLeft: '0.8rem'}}>Save Job</Button>
                </Card.Body>
            </Card>
            </Col>
            <Col>

            <Card  bg="light" border="success" style={{ height: '20em', width: '18rem' ,marginTop: '0.8rem'}}>

                <Card.Body>
                <Card.Header>Senior PHP Developer</Card.Header>
                    <Card.Text>
                        skills? or just some descriptions?
                        skills? or just some descriptions?
                        skills? or just some descriptions?
                        skills? or just some descriptions?

    </Card.Text>
                    <Button variant="dark" style = {{marginLeft: '0.8rem'}}>Apply</Button>
                    <Button variant="dark" style = {{marginLeft: '0.8rem'}}>Save Job</Button>
                </Card.Body>
            </Card>
            </Col>
            
            </Row>
            </Container>




        </div>
    )
}