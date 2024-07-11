import { useState } from "react";
import { Button, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [city, setCity] = useState("");
  const [coordinates, setCoordinates] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (city) {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=79f8fbf11c17f68793924902d083aa14&units=metric`
        );
        if (response.ok) {
          const data = await response.json();
          const coordinates = {
            lat: data.coord.lat,
            lon: data.coord.lon,
          };
          setCoordinates(coordinates);
          navigate('/dettailsSearch', { state: { city, coordinates } });
        } else {
          console.error("ERROR");
        }
      } catch (error) {
        console.error("ERROR", error);
      }
    }
  };

  return (
    <>
      <Form inline onSubmit={handleSubmit}>
        <Row>

          <div className="containerSearchCenter">
            <Form.Control
              type="text"
              placeholder="SEARCH YOUR CITY"
              className="SearchBar mr-sm-2"
              value={city}
              onChange={handleInputChange}
            />
            <Button className="buttonSearch" type="submit" variant="primary">
              GO
            </Button>
          </div>
         </Row>
      </Form>
    </>
  );
};

export default Search;
