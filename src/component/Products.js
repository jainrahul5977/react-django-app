import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductItem from "./ProductItem";
// import ProductItem from "./ProductItem2";
import PersonIcon from "@material-ui/icons/Person";

function Products() {
  const [jsondata, setJsonData] = useState([]);
  const [token, setToken] = useState(sessionStorage.getItem("token"));

  const fetchdata = async () => {
    const product_url = "http://127.0.0.1:8000/product/all";
    const res_data = await fetch(product_url).then((response) =>
      response.json()
    );
    await setJsonData(res_data);
    //await sessionStorage.setItem("token" , res_data)
  };

  useEffect(() => {
    fetchdata();
    console.log(sessionStorage.getItem("token"));
  }, []);

  return (
    <>
      <main>
        <div className="container d-flex justify-content-around">
          <Link to="/login">
            <Button className="mx-2" disabled={token}>
              login
            </Button>
          </Link>
          <Link to="/profile">
            <PersonIcon />
            Profile
          </Link>
          <Button
            className="mx-2"
            onClick={() => {
              sessionStorage.removeItem("token");
              setToken(false);
            }}
            disabled={!sessionStorage.getItem("token")}
          >
            logout
          </Button>
        </div>
        {console.log(token)}
        <h2> Products</h2>
        {console.log(jsondata)}
        <Container>
          <Row md={4}>
            {jsondata.map((element) => {
              return (
                <Col key={element.id}>
                  <ProductItem
                    name={element.product__name}
                    price={"$" + element.product__price}
                    image={"http://127.0.0.1:8000/media/" + element.picture}
                    id={element.id}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </main>
    </>
  );
}

export default Products;
