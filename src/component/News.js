import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import NewsItem from "./NewsItem";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import PersonIcon from "@material-ui/icons/Person";
// import axios from "axios";

function News() {
  const [jsondata, setJsonData] = useState([]);
  // const [loading, setloading] = useState(true);
  const [pages, setPages] = useState(1);
  const [totalNews, setTotalNews] = useState();
  const [token, setToken] = useState();
  const fetchdata = async () => {
    const API_KEY = "eb004dc8f8e34a189d6cf82cf5f7ff5d";
    const Category = "business";
    const pageSize = 10;
    const url = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}&category=${Category}&page=${pages}&pageSize=${pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setTotalNews(parsedData.totalResults);

    setJsonData(parsedData.articles);
    // setloading(false);
  };

  // const fetchdataAxios = async () => {
  //   const API_KEY = "eb004dc8f8e34a189d6cf82cf5f7ff5d";
  //   const Category = "business";
  //   const pageSize = 10;
  //   const url = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}&category=${Category}&page=${pages}&pageSize=${pageSize}`;
  //   let parsedData = await fetch.get(url).then((response) => response.data());
  //   await setTotalNews(parsedData.totalResults);
  //   await setJsonData(parsedData.articles);
  //   if (jsondata) {
  //     setloading(false);
  //   }
  // };

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
        <h2> Headlines</h2>
        <Container>
          <Row md={4}>
            {jsondata.map((element) => {
              return (
                <Col key={element.id}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    image={element.urlToImage}
                    url={element.url}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
        <div className="container d-flex justify-content-between">
          <Button
            onClick={() => {
              if (pages > 1) {
                setPages(pages - 1);
              }
            }}
          >
            {" "}
            <ArrowBackIcon />
            Prev
          </Button>
          <Button
            onClick={() => {
              if (pages < Math.ceil(totalNews / 10)) {
                setPages(pages + 1);
                console.log(pages);
              }
            }}
          >
            Next
            <ArrowForwardIcon />
          </Button>
        </div>
      </main>
    </>
  );
}

export default News;
