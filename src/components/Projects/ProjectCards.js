import React from "react";
import { Card, Carousel } from "react-bootstrap";

function ProjectCards({ title, description, images }) {
  return (
    <Card className="project-card-view">
      {images && images.length > 0 && (
        <Carousel wrap={true}>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <div className="carousel-image-wrapper">
                <img
                  className="d-block w-100"
                  src={image}
                  alt={`Slide ${index}`}
                />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

ProjectCards.defaultProps = {
  images: [],
};

export default ProjectCards;
