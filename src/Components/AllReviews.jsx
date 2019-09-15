import React, { Component } from "react";
import {
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Container,
  CardImg
} from "reactstrap";
import { Link } from "react-router-dom";

class AllReviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      product: null
    };
  }
  render() {
    return (
      <>
        {this.state.product && (
          <Container fluid>
            <CardImg
              fluid
              className="fluid"
              top
              src={this.state.product.imageUrl}
              alt="image"
            />
            <CardBody>
              <CardTitle>{this.state.product.name}</CardTitle>
              <CardSubtitle>
                Year: {this.state.product.description}
              </CardSubtitle>
              <CardText>{this.state.product.price}</CardText>
              <h6>Reviews</h6>
              <CardText>
                {this.state.reviews &&
                  this.state.reviews.map(review => (
                    <div key={review.id}>
                      <p>
                        Rating: {review.rate} Comment: {review.comment}
                      </p>
                    </div>
                  ))}
              </CardText>
              {/* {!this.state.reviews && this.state.reviews.length > 0 && <h4>No comments</h4>} */}
              <Link to={"/products"}>
                <Button className="btnTwo" outline color="danger" size="sm">
                  Back
                </Button>
              </Link>
            </CardBody>
          </Container>
        )}
        ;
      </>
    );
  }

  componentDidMount = async () => {
    var productId = this.props.match.params.productId;
    await this.getProductReviews(productId);
    await this.getProduct(productId);
  };

  getProduct = async productId => {
    var resp = await fetch("http://localhost:3000/products/" + productId);
    var json = await resp.json();
    this.setState({ product: json });
    console.log(json);
  };

  getProductReviews = async productId => {
    var resp = await fetch(
      "http://localhost:3000/products/" + productId + "/reviews"
    );
    var json = await resp.json();
    this.setState({ reviews: json });
    console.log(json);
  };
}
export default AllReviews;
