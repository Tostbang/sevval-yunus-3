import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

import Layout from '../../../component/Layout';

export default function index() {
  
    return (
      <div>
        <Layout> 
        <MySlider />
        <MyCards />
        </Layout>
        
      </div>
    );
  }

 
  
  const MySlider = () => {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/id/287/200/50"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/id/257/200/50"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/id/27/200/50"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }

  const MyCards = () => {
    return (
      <div className="card-container mt-5">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://via.placeholder.com/150" />
          <Card.Body>
            <Card.Title>Card Başlığı 1</Card.Title>
            <Card.Text>
              Bu birinci kartın metin içeriğidir. Burada kartın içeriği veya açıklaması olabilir.
            </Card.Text>
          </Card.Body>
        </Card>
  
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://via.placeholder.com/150" />
          <Card.Body>
            <Card.Title>Card Başlığı 2</Card.Title>
            <Card.Text>
              Bu ikinci kartın metin içeriğidir. Burada kartın içeriği veya açıklaması olabilir.
            </Card.Text>
          </Card.Body>
        </Card>
  
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://via.placeholder.com/150" />
          <Card.Body>
            <Card.Title>Card Başlığı 3</Card.Title>
            <Card.Text>
              Bu üçüncü kartın metin içeriğidir. Burada kartın içeriği veya açıklaması olabilir.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }

