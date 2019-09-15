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
import { Link } from "react-router-dom";
import AllReviews from "./AllReviews";
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
                  <Card key={product.id} className = "align-items-center" id="wholeCard">
                    <CardImg 
                      fluid
                      className = "fluid"
                      top
                      src={product.imageUrl}
                      alt="image"
                    />
                    <CardBody className = "cardBody">
                      <CardTitle>{product.name}</CardTitle>
                      <CardSubtitle>{product.description}</CardSubtitle>
                      <CardText ><span>€{product.price}</span></CardText>
                    </CardBody>
                    <Link
                     to={"products/"+ product.id + "/reviews"}
                     className="titleLink">
                    <Button onClick={() =><AllReviews/> }>Reviews</Button>                
                   </Link>
                   </Card>

            ))}
          </Row>
        </Container>
      </>
    );
  }


  componentDidMount = async () => {
    await this.getProducts();

  };

  getProducts = async () => {
    var resp = await fetch("http://localhost:3000/products");
    var json = await resp.json();
    this.setState({ products: json });

}



}

export default DisplayProducts;


    //this.getAllComments(this.props.item.asin)//