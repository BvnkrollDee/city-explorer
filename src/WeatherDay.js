import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from 'react-bootstrap/Accordion';










function WeatherDay(props){

    return(
<>
        <Accordion.Item eventKey={props.NickKerr}>
<Accordion.Header>{props.data.date}</Accordion.Header>
<Accordion.Body>{props.data.description}</Accordion.Body>
</Accordion.Item>
</>
    )



}




export default WeatherDay