import "./App.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Main from "./Main";
import Accordion from 'react-bootstrap/Accordion'

function Weather(props) {
    console.log(props.data)
  return (
    <>
    {/* <h1>weather data</h1> */}
      {props.data.map((element) => {
        return (<p>{element.date} {element.description}</p>)
      })}
<Accordion defaultActiveKey="0">
{props.data.map((element, index) => {
        return <Accordion.Item eventKey={index}>
                    <Accordion.Header>{element.date}</Accordion.Header>
                    <Accordion.Body>{element.description}</Accordion.Body>
        </Accordion.Item>
      })}

    </Accordion>
    </>
  );
}
export default Weather;
