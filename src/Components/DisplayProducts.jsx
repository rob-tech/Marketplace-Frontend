import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Col,
  Row,
  Container
} from "reactstrap";
// import image from "../Assets/Spotify_Logo.png";

class DisplayProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  render() {
    return (
      <>
        <Container fluid>
          <Row>
            {this.state.products.map(product => (
              <div key={product.id}>
                <Col sm= "3">
                  <Card>
                    <CardImg 
                      fluid
                      className = "fluid"
                      top
                      src={product.imageUrl}
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle>{product.name}</CardTitle>
                      <CardSubtitle>{product.descriptio}</CardSubtitle>
                      <CardText>{product.price}</CardText>
                    </CardBody>
                    {/* <Button onClick={() => this.getAllComments(this.props.item.asin)}>Load Comments</Button>
        <AllComments comments={this.state.comments} /> */}
                  </Card>
                </Col>
              </div>
            ))}
          </Row>
        </Container>
      </>
    );
  }

  componentDidMount = async () => {
    var resp = await fetch("http://localhost:3000/products");
    var json = await resp.json();
    this.setState({ products: json });
  };
}

export default DisplayProducts;
