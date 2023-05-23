import Movie from "./Movie";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";



function Movies(props) {

return(
<div>

<Card.Body>
              <Card.Img variant="top" src={"https://image.tmdb.org/t/p/original"+props.info.poster_path} />
              <Card.Title>{props.info.title}</Card.Title>
              <Card.Subtitle>{props.info.overview}</Card.Subtitle>
              <Card.Text> Popularity Rating {props.info.popularity}</Card.Text>
            </Card.Body>





</div>









)}

export default Movies