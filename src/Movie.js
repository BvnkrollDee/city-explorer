import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

function Movie(props) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        {props.data.map((element) => {
          return (
            <Card.Body>
              <Card.Img variant="top" src={element.poster_path} />
              <Card.Title>{element.title}</Card.Title>
              <Card.Subtitle>{element.overview}</Card.Subtitle>
              <Card.Text> Popularity Rating {element.popularity}</Card.Text>
            </Card.Body>
          );
        })}
      </Card>
    </div>
  );
}

export default Movie;
