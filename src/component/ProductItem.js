import React, { useState, useEffect } from "react";
import { Card, Container, Button } from "react-bootstrap";
import RingFinger from "./RingFinger";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
function ProductItem(props) {
  const { name, price, image, id } = props;
  const [img, setImg] = useState();
  //const btn= () =>{setImg(image)}
  //const back = () =>{ if(img){"Back"}}
  

  const ringfinger = async (id, num) => {
    const url = `http://127.0.0.1:8000/product/?id=${id}&num=${num}`;
    const image = await fetch(url).then((response) => response.json());
    console.log(image);
    setImg(image.Img);
    <RingFinger imgs ={image} />
  };
  return (
    <>
      <Container>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={img ? img : image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{price}</Card.Text>
            <Button
              variant="primary"
              className="mx-2"
              onClick={() => ringfinger(id, 1)}
            >
              {/* <RingFinger id={id} num={3} /> */}1
            </Button>
            <Button
              variant="primary"
              className="mx-2"
              onClick={() => ringfinger(id, 2)}
            >
              2
            </Button>
            <Button
              variant="primary"
              className="mx-2"
              onClick={() => ringfinger(id, 3)}
            >
              3
            </Button>
            <Button variant="dark" disabled={!img} onClick={() => setImg(0)} ><ArrowBackIosIcon /></Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default ProductItem;
