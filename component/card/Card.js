import React from 'react';
import Card from 'react-bootstrap/Card';

const MyCard = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://via.placeholder.com/150" />
      <Card.Body>
        <Card.Title>Card Başlığı</Card.Title>
        <Card.Text>
          Bu bir kartın metin içeriğidir. Burada kartın içeriği veya açıklaması olabilir.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MyCard;
