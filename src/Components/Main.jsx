import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DisplayProducts from "./DisplayProducts";
import AllReviews from "./AllReviews";

class Main extends Component {
  render() {
    return (
      <Router>
        <Route path="/products" exact component={DisplayProducts} />
        <Route
          path="/products/:productId/reviews"
          exact
          component={AllReviews}
        />
      </Router>
    );
  }
}

export default Main;
