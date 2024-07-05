import { Component } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

class Search extends Component{

render(){
    return(
        <Form inline>
        <Row className="ConteinerSearch">
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="WHAT'S THE WEATHER?"
              className="SearchBar mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button className="buttonSearch" type="submit" variant="primary" >GO</Button>
          </Col>
        </Row>
      </Form>
    )
}
}

export default Search;