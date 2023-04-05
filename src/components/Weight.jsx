import React, { Component, useState } from 'react';



const Weight = () => {
  

    const [inputWeight, setInputWeight] = useState('');
  
    const onChange = (e) => {
      // e.preventDefault();
      const input = e.target.value;
      setInputWeight(input);
    };

    
  const saveHistory = async () => {
    console.log(inputWeight)
     await fetch('/history', {
      method: 'POST',
      header: {'Content-Type': 'application/json' },
      body: JSON.stringify({weight: Number(inputWeight)})
      // body: JSON.stringify('AHGHHHHHHH')
    })
       .then(data => data.json())
      .then(data => console.log('inside saveHistory method:', data))
      .catch(err => console.log("error in saving history", err))
  }

  return (
    <div>
      <div id="weight">
        <input name="weight" type="text" placeholder="enter your weight"  onChange={onChange}></input>
        <button id="save" onClick={saveHistory}>Save</button>
      </div>
    </div>
  );
}

export default Weight;

// class Weight extends Component {
//   constructor(props) {
//     super(this.props)
//     this.state = ({
//       weight: ""
//     })
//     this.handleWeight = this.handleWeight.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }
  
//   handleWeight(e) {
//     let newWeight = e.target.value
//     console.log(newWeight)
//     this.setState({
//       weight : newWeight
//     })
//   }
  
//   handleSubmit(e) {
//     e.preventDefault();
//     const body = this.state.weight
//     console.log('weight adter setState:', body)
//     fetch('/history', {
//       method: 'POST',
//       header: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(body)
//     })
//       .then(data => data.json())
//       .then(data => console.log('after fetch:', data))
//       .catch(err => console.log("error in saving history"));
//   }
  
//   render() {
//     return (
//       <div>
//         <div id="weight">
//           <input name="weight" type="text" placeholder="enter your weight" onChange={this.handleWeight}></input>
//           <button id="save" onClick={this.handleSubmit}>Save</button>
//         </div>
//       </div>
//     )
//    }
//  }