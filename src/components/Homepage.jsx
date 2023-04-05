import React, { Component } from 'react';
import Weight from './Weight.jsx'
import WklyHistory from './WklyHistory.jsx'

class Homepage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Welcome Back!</h2>     
        <Weight />
        {/* <Status /> */}
        <WklyHistory />
        {/* <Graph /> */}
      </div>
    );
  }
}
export default Homepage;