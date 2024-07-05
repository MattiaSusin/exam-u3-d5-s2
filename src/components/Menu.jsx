import { Component } from "react";
import { Container, Row} from "react-bootstrap";
import Search from "./Search";
import Contenuto from "./Contenuto";

class Menu extends Component{
    render(){
        return(
        <Row>
            <div className="contenitoreMenu">
               
                        <Container className="NameMenu">
                                        <div className="inLinea">
                                            <h2 className="h2Menu">FIND YOUR CITY</h2>
                                        </div>
                        </Container>
                <Search/>
            </div>
            <Contenuto />

        </Row>
        )
    }
}

export default Menu;