import React, { Component, useState } from 'react';


const Weight = () => {
    const [inputWeight, setInputWeight] = useState('');

    const onChange = (e) => {
        const input = e.target.value;
        //console.log(input)

        setInputWeight(input);
    }
    // console.log(inputWeight, 'inputWeight');


    // inputWeight = this.state.inputWeight;
    // setInputWeight= this.setState({inputWeight})

    // create a function for the button
    // grab the state of inputWeight
    //call the POST request to your backend
    //that will store the information to your DB
  
  const saveHistory = () => {
    const body = { inputWeight }
    fetch('http://localhost:3000/history', {
      method: 'POST',
      header: { 'Content-Type': 'Application/JSON' },
      body: JSON.stringify(body)
    })
      .then(data => data.json())
      .then(data => console.log('inside saveHistory method:', data))
      .catch(err => console.log("error in saving history"))
   }

  return (
    <div>
        <div id="weight">
            <input name="weight" type="text" placeholder="enter your weight" onChange={onChange}></input>
        <button id="save" onClick={saveHistory}>Save</button>
        </div>
    </div>
    )
}

export default Weight;