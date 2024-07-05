import { Component } from "react";
import { Button, Card, Container, Row } from "react-bootstrap";

class Contenuto extends Component {
    state = {
        cities: ["Treviso", "New York", "Venice"],
        cityImages: {}
    };

    fetchCityImage = (cityName) => {
        return fetch(`https://api.unsplash.com/search/photos?query=${cityName}&client_id=ByLQIS6mFtzPrTNUt5V1hH-bbkKEs-MMgk-qfx_yMIM`)
            .then((resp) => {
                if (resp.ok) {
                    return resp.json();
                } else {
                    throw new Error('ERRORE DI CHIAMATA');
                }
            })
            .then((data) => data.results[0]?.urls?.small);
    };

    componentDidMount() {
        console.log('COMPONENTDIDMOUNT');
        const imagePromises = this.state.cities.map(city => this.fetchCityImage(city));

        Promise.all(imagePromises)
            .then((images) => {
                const cityImages = {};
                this.state.cities.forEach((city, index) => {
                    cityImages[city] = images[index];
                });
                this.setState({
                    cityImages: cityImages,
                });
                console.log('IMMAGINI JSON', cityImages);
            })
            .catch((e) => {
                console.log('ERRORE!!!', e);
            });
    }

    render() {
        console.log('RENDER');
        const { cities, cityImages } = this.state;
        return (
            <div className="contenitoreContent">
                <Container className="NameMenu">
                    <div className="inLineaContent">
                        <h2>YOUR FAVOURITES CITY</h2>
                        <Row className="AllCards">
                            {cities.map((city, index) => (
                                <Card key={index} className="CardSingle">
                                    {cityImages[city] && (
                                        <Card.Img
                                            variant="top"
                                            className="imgCardContent"
                                            src={cityImages[city]}
                                        />
                                    )}
                                    <Card.Body className="BodyCardContent">
                                        <Row>
                                            <Button variant="primary" className="ContentButton">
                                                Go to {city}
                                            </Button>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            ))}
                        </Row>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Contenuto;
