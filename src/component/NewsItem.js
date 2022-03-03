import React from "react";
import { Card, Container, Button } from "react-bootstrap";

function NewsItem(props) {
  const { title, description, image, url } = props;
  return (
    <>
      <Container>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            {/* Go somewhere */}
            <a href={url} target="_blank">
              <Button variant="primary">Read More</Button>
            </a>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default NewsItem;
