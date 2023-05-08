import "./App.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Main.css"
// function

function Main() {
  let enteredTxt = ""; // created an empty string variable so that whatever the user inputs that data specifically can be found.
  // this request query the entered text instead of memphis

  const [mappedData, setMappedData] = useState(null); // Creating a state for the data that gets pulled from the api because it will be changing constantly
  const [mapImage, setMapImage] = useState("15.1335022,-29.9668758")

  async function getLocation() {
    // creating an asynchronous function in order to get the information that the user inputs.
    let locationData = await axios // creating a variable that will fetch data from the url.
      .get(
        `https://us1.locationiq.com/v1/search?key=pk.821caa817d8c0cc9cd908a3dc840e65d&q=${enteredTxt}&format=json`
      )
      .then((res) => {
        return res.data;
      })
      .catch((error) => { // error is handled in catch block
        if (error.response) { // status code out of the range of 2xx
          console.log("Data :" , error.response.data);
          console.log("Status :" + error.response.status);
        } else if (error.request) { // The request was made but no response was received
          console.log(error.request);
        } else {// Error on setting up the request
          console.log('Error', error.message);
        }
      });;
    console.log(locationData);
   
    let bigNames = locationData.map((value, index) => { // this is mapping through the data that is returned and returning specifically what is asked for3
      return (
        <h3>
            {value.display_name} {value.lat} {value.lon}
        </h3>
      );
    });
    setMappedData(bigNames[0]);
    console.log(mappedData);
    setMapImage(`${locationData[0].lat},${locationData[0].lon}`)
  }
  // when they click the button we need to make a new request to location iq
  return (
    <div className="body">
      <Form
        onSubmit={(event) => {
          event.preventDefault();  // preventing the refreshing of the page when the button is clicked.
          getLocation();  // running the function when the button is clicked.

          console.log(enteredTxt);
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="title" >City Finder</Form.Label>
          <Form.Control
            onChange={(event) => {
              console.log(event.target.value);
              enteredTxt = event.target.value;
            }}
            type="text"
            placeholder="Enter a City"
          />
          <Form.Text className="txtNextToButton">
            Explore The World To Your Heart's Content{" "}
          </Form.Text>
          <Button className="Button" type="submit" value="submit">
            {" "}
            Explore!{" "}
          </Button>
        </Form.Group>
      </Form>

      <p> {mappedData}</p>
      <img className="mapImage" src={`https://maps.locationiq.com/v3/staticmap?key=pk.821caa817d8c0cc9cd908a3dc840e65d&center=${mapImage}&zoom=12`} alt=""/>
    </div>
  );
}

export default Main;
