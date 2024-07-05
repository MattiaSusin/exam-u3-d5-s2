import React, { Component } from "react";
import { Button,Form, Row } from "react-bootstrap";
import DetailsSearch from "./DetailsSearch";

class Search extends Component {
  state = {
    city: "",
    coordinates: null,
  };

  handleInputChange = (event) => {
    this.setState({ city: event.target.value });
  };

  handleSubmit = async (event) => {                                                                        //!COL METODO HANDLE CREIAMO UNA RICERCA TRAMITE LE FETCH PER CERCARE LA CITTA' 
    event.preventDefault();
    const { city } = this.state;
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
          this.setState({ coordinates });
        } else {
          console.error("Error fetching weather data");
        }
      } catch (error) {
        console.error("Error fetching weather data", error);
      }
    }
  };

  render() {
    const { city, coordinates } = this.state;
    return (
      <>
        <Form inline onSubmit={this.handleSubmit}>
          <Row className="ContainerSearch">
            
              <Form.Control
                type="text"
                placeholder="SEARCH YOUR CITY"
                className="SearchBar mr-sm-2"
                value={city}
                onChange={this.handleInputChange}
              />
            
           
              <Button className="buttonSearch" type="submit" variant="primary">
                GO
              </Button>
            
          </Row>
        </Form>
        <div style={{ marginTop: '20px' }}>
          {coordinates && <DetailsSearch coordinates={coordinates} />}
        </div>
      </>
    );
  }
}

export default Search;
