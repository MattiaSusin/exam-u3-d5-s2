import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Carousel } from "react-bootstrap";

const Results = () => {
  const location = useLocation();
  const { city, coordinates } = location.state || {};
  const [dailyForecast, setDailyForecast] = useState([]);
  const [weeklyForecast, setWeeklyForecast] = useState([]);

  useEffect(() => {
    const fetchDailyForecast = async () => {
      if (coordinates) {
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=79f8fbf11c17f68793924902d083aa14&units=metric`
          );
          if (response.ok) {
            const data = await response.json();
            const today = new Date();
            const daily = data.list.filter((entry) => {
              const entryDate = new Date(entry.dt * 1000);
              return (
                entryDate.getDate() === today.getDate() &&
                entryDate.getMonth() === today.getMonth() &&
                entryDate.getFullYear() === today.getFullYear()
              );
            });
            setDailyForecast(daily);
            // Filtra le previsioni settimanali
            const weekly = data.list.filter((entry) => {
              const entryDate = new Date(entry.dt * 1000);
              return entryDate.getHours() === 12;
            }).slice(0, 5);
            setWeeklyForecast(weekly);
          } else {
            console.error("Errore nella risposta dell'API");
          }
        } catch (error) {
          console.error("Errore nella chiamata API", error);
        }
      }
    };

    fetchDailyForecast();
  }, [coordinates]);

  return (
    <div className="PageSearch">
      <Container className="contenitoreResults1">
        <h2 className="h2Results">{city}</h2>
        <Carousel controls={false} indicators={false} interval={null}>
          {dailyForecast.map((entry, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex justify-content-center">
                <div className="weather-card p-4">
                  <h5 className="h5Results">
                    {new Date(entry.dt * 1000).toLocaleString()}
                  </h5>
                  <p>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-thermometer-high"
                        viewBox="0 0 16 16"
                      >
                        <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585a1.5 1.5 0 0 1 1 1.415" />
                        <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1" />
                      </svg>{" "}
                      Temperature:
                    </span>{" "}
                    {entry.main.temp}°C
                  </p>
                  <p>
                    <span> Weather:</span> {entry.weather[0].description}
                  </p>
                  <p>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-droplet-half"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.21.8C7.69.295 8 0 8 0q.164.544.371 1.038c.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8m.413 1.021A31 31 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10c0 0 2.5 1.5 5 .5s5-.5 5-.5c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"
                        />
                        <path
                          fillRule="evenodd"
                          d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87z"
                        />
                      </svg>{" "}
                      Humidity:
                    </span>{" "}
                    {entry.main.humidity}%
                  </p>
                  <p>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-wind"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5m-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2M0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5" />
                      </svg>{" "}
                      Wind Speed:
                    </span>{" "}
                    {entry.wind.speed} m/s
                  </p>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  );
};

export default Results;
