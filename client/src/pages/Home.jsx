import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Home = () => {
  return (
    <div className="home-container">
      <div className="banner">
        <h1>Welcome to Our Photography Studio</h1>
      </div>
      <div>
        <p>Hello! Please select from one of the choices above.</p>
      </div>
      <div>
        <div className="home-header">
          <h1 className="home-title">Capturing Life's Moments</h1>
          <span className="home-divider"></span>
        </div>
      </div>
      <div>
        <div className="home-description">
          <p>
            <span>Professional photography for weddings, families, and events</span>
          </p>
        </div>
      </div>

      <div>
        <CardGroup>
          <Card>
            <Card.Img variant="top" className="service-image" src="https://image.jimcdn.com/app/cms/image/transf/dimension=1000x10000:format=jpg/path/sc6d2404ff8bcd49b/image/i157ef2ec4144621a/version/1515190448/image.jpg" />
            <Card.Body>
              <Card.Title>Private Parties</Card.Title>
              <Card.Text>
                Let our photographers capture the unforgettable memories of your private party!
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" className="service-image" src="https://www.seanleblancphotography.com/wp-content/uploads/2019/01/Sean-LeBlanc-Photography-Best-Wedding-Photographs-of-2018-19.jpg" />
            <Card.Body>
              <Card.Title>Weddings</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" className="service-image" src="https://www.corporateheadshotportraits.com/wp-content/uploads/2018/02/business-corporation-large-group-photo.jpg" />
            <Card.Body>
              <Card.Title>Corporate Functions</Card.Title>
              <Card.Text>
                Let us bring professional photos of your corporate teams, locations, offices, and so much more.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
};

export default Home;
