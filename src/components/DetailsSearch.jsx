import {Component} from "react";
import PropTypes from "prop-types";
import ResultsSearch from "./ResultsSearch";

class DetailsSearch extends Component {
  state = {
    weatherData: null,
  };

  componentDidMount() {
    this.fetchWeatherData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.coordinates !== this.props.coordinates) {
      this.fetchWeatherData();
    }
  }

  fetchWeatherData = async () => {
    const { lat, lon } = this.props.coordinates;                                                                //!CREIAMO UNA FETCH PER ASSEGNARE DUE VALORI UNO LONGITUTINE E L'ALTRO LATITUDINE 
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=79f8fbf11c17f68793924902d083aa14&units=metric`
      );
      if (response.ok) {
        const data = await response.json();
        this.setState({ weatherData: data });
      } else {
        console.error("ERRORE DATA");
      }
    } catch (error) {
      console.error("ERRORE DATA", error);
    }
  };

  render() {                                                                                                            //!!CREIAMO UNA SORTA DI CARICAMENTO DI ATTESA 
    const { weatherData } = this.state;
    return (
      <>
        {weatherData ? (
          <ResultsSearch weatherData={weatherData} />
        ) : (
          <p>Loading...</p>
        )}
      </>
    );
  }
}

DetailsSearch.propTypes = {
  coordinates: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lon: PropTypes.number.isRequired,
  }).isRequired,
};

export default DetailsSearch;
