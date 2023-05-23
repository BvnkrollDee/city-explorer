import "./App.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Main from "./Main";
import Accordion from 'react-bootstrap/Accordion'
import WeatherDay from "./WeatherDay";

function Weather(props) {
//   console.log(props.data); // Logging the received weather data

  return (
    <>
      {/* Displaying weather data as paragraphs */}


      {/* Displaying weather data as an accordion */}
      <Accordion defaultActiveKey="0">
        {props.data.map((element, index) => {
          return (
           <WeatherDay data={element} NickKerr={index}/>
          );
        })}
      </Accordion>
    </>
  );
}

export default Weather;
