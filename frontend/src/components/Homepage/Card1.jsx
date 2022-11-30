import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Card1 = () => {
  return (
    <div>
        <Card  className='m-auto'style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://hesolutions.com.pk/wp-content/uploads/2019/01/picture-not-available.jpg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button className='border-0 mx-2'style={{background: 'teal'}} variant="primary">Add to Cart</Button>
                <Button className='border-0 mx-2'style={{background: 'teal'}} variant="primary">Buy Now</Button>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Card1
