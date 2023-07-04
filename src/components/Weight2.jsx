import React, { useState } from 'react';

const Weight = ({onChange, saveHistory }) => {
  
    const handleSubmit = (event)=>{
    event.preventDefault();
    event.target.reset();
  };

    return (
    <div>
      <div id="weight">
        <form onSubmit={handleSubmit}>
          <div>Enter Your Weight</div>
          <input name="weight" type="text" placeholder="lb" onChange={onChange}></input>
              {/* {weightError ? (<span className="errorMsg">{weightError}</span>) : null} */}
          <button id="save" type="submit" onClick={saveHistory}>Save</button>
        </form>
      </div>
    </div>
  );
};
export default Weight;