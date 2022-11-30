import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card1 from './Card1';

const Sales = () => {
  return (
    <div>
        <h1 className='text-center mt-5'>Sales</h1>
        <Container>
            <Row className='text-center'>
                <Col><Card1 /></Col>
                <Col><Card1 /></Col>
                <Col><Card1 /></Col>
            </Row>
            <Row className='text-center mt-5'>
                <Col><Card1 /></Col>
                <Col><Card1 /></Col>
                <Col><Card1 /></Col>
            </Row>
        </Container>
    </div>
  )
}

export default Sales