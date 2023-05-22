import "./App.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Main.css";
import Weather from "./Weather";
import Movie from "./Movie";

function Main() {
  // let enteredTxt = ""; // A variable to store the user's entered text
  const [enteredTxt, setEnteredTxt] = useState("");
  const [mappedData, setMappedData] = useState(null); // State to hold the data pulled from the API
  const [mapImage, setMapImage] = useState("15.1335022,-29.9668758"); // State to hold the map image coordinates
  const [forecast, setForecast] = useState([]); // State to hold the weather forecast data
  const [movies, setMovies] = useState([]);

  async function getLocation() {
    // Asynchronous function to get location information based on user input
    let locationData = await axios.get(
      `https://us1.locationiq.com/v1/search?key=pk.821caa817d8c0cc9cd908a3dc840e65d&q=${enteredTxt}&format=json`
    );
    setMapImage(`${locationData.data[0].lat},${locationData.data[0].lon}`);
    // console.log(locationData);

    let forecastData = await axios.get(
      `http://localhost:3000/weather?lat=${locationData.data[0].lat}&lon=${locationData.data[0].lon}`
    );
    setForecast(forecastData.data);
  }

  async function getMovie() {
    let movieData = await axios.get(
      `http://localhost:3000/movies?movie=${enteredTxt}`
    );
    setMovies(movieData.data);
    console.log(movieData.data);
  }

  return (
    <div className="body">
      <Form
        onSubmit={async (event) => {
          event.preventDefault(); // Prevent page refresh on form submission
          await getLocation(); // Call the getLocation function when the button is clicked
          await getMovie();
          // console.log(movies)
          // console.log(enteredTxt);
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="title">City Finder</Form.Label>
          <Form.Control
            onChange={(event) => {
              // console.log(event.target.value);
              setEnteredTxt(event.target.value); // Store the user's entered text in the variable
            }}
            type="text"
            placeholder="Enter a City"
          />
          <Form.Text className="txtNextToButton">
            Explore The World To Your Heart's Content
          </Form.Text>
          <Button className="Button" type="submit" value="submit">
            Explore!
          </Button>
        </Form.Group>
      </Form>

      <p>{mappedData}</p>
      <img
        className="mapImage"
        src={`https://maps.locationiq.com/v3/staticmap?key=pk.821caa817d8c0cc9cd908a3dc840e65d&center=${mapImage}&zoom=12`}
        alt=""
      />
      <Weather data={forecast} />
      <Movie data={movies}/>
      
    </div>
  );
}

export default Main;
