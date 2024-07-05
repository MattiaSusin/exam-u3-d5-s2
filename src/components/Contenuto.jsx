import { Component } from "react";
import { Button, Card, Container, Row } from "react-bootstrap";

class Contenuto extends Component {
    render() {
        return (
            <div className="contenitoreContent">
                <Container className="NameMenu">
                    <div className="inLineaContent">
                        <h2>YOUR FAVOURITES CITY</h2>
                        <Row className="AllCards">
                            <Card className="CardSingle">
                                <Card.Img
                                    variant="top"
                                    className="imgCardContent"
                                    src="https://media.istockphoto.com/id/1355061919/it/foto/piazza-duomo-a-milano-al-tramonto.webp?s=2048x2048&w=is&k=20&c=pGKq8ZRqWO2OFAnnyQdj2IOebyuT98fuzvMl6NGY0AQ="
                                />
                                <Card.Body className="BodyCardContent">
                                    <Row>
                                    <Button variant="primary" className="ContentButton">
                                        Go to Milan {/* ${city} */}
                                    </Button>
                                    </Row>
                                </Card.Body>
                            </Card>

                            <Card className="CardSingle">
                                <Card.Img
                                    variant="top"
                                    className="imgCardContent"
                                    src="https://media.istockphoto.com/id/1148857816/it/foto/colosseo-a-roma.webp?s=2048x2048&w=is&k=20&c=oLsgE6gIiQ3yDYeOJ266lwNqGmHw33JHMuEtbADAzho="                                />
                                <Card.Body className="BodyCardContent">
                                    <Row>
                                    <Button variant="primary" className="ContentButton">
                                        Go to {/* ${city} */}
                                    </Button>
                                    </Row>
                                </Card.Body>
                            </Card>

                            <Card className="CardSingle">
                                <Card.Img
                                    variant="top"
                                    className="imgCardContent"
                                    src="https://media.istockphoto.com/id/1124247564/it/foto/gondole-canal-grande-al-molo-servizio-doganale-in-gondola-e-chiesa-di-san-giorgio-maggiore.webp?s=2048x2048&w=is&k=20&c=_Bg8hyr99R4nra8kofg-GTBrDDA_qA0v98ldsfgYSps="                                />
                                <Card.Body className="BodyCardContent">
                                    <Row>
                                    <Button variant="primary" className="ContentButton">
                                        Go to {/* ${city} */}
                                    </Button>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Row>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Contenuto;
