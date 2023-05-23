import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Movies from './Movies'

function Movie(props) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        {props.data.map((element) => {
          return (
            <Movies info={element}/>
          );
        })}
      </Card>
    </div>
  );
}

export default Movie;
