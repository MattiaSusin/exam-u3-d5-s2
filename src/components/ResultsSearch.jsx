import PropTypes from "prop-types";

const ResultsSearch = ({ weatherData }) => {
  if (!weatherData || !weatherData.main || !weatherData.weather) {
    return <p>No weather data available</p>;
  }

  return (
    <div className="WeatherResult">
      <h3>{weatherData.name}</h3>
      <p>Temperature: {weatherData.main.temp} °C</p>
      <p>Condition: {weatherData.weather[0].description}</p>
    </div>
  );
};

ResultsSearch.propTypes = {
  weatherData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    main: PropTypes.shape({
      temp: PropTypes.number.isRequired,
    }).isRequired,
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default ResultsSearch;
