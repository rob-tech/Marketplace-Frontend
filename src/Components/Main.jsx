import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import DisplayProducts from "./DisplayProducts";


class Main extends Component {
 
    
    
      render() {
        return (
          <Router>
   
            <Route path="/products" exact component={DisplayProducts} />
 
          </Router>
        )
}


}
 
export default Main ;