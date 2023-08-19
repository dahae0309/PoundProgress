import React from 'react';

const Weight = ({onChange, saveHistory }) => {
  
    const handleSubmit = (event)=>{
    event.preventDefault();
    event.target.reset();
  };

    return (
    <div>
      <div id="weight">
        <form onSubmit={handleSubmit}>
          <div><h2>Enter Your Weight</h2></div>
          <input name="weight" type="text" placeholder="lb" onChange={onChange}></input>
          <button id="save" type="submit" onClick={saveHistory}>Save</button>
        </form>
      </div>
    </div>
  );
};
export default Weight; 