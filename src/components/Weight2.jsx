import React, { useState } from 'react';

const Weight = ({onChange, saveHistory }) => {
  
    return (
    <div>
      <div id="weight">
        <div>Enter Your Weight</div>
        <input name="weight" type="text" placeholder="lb"  onChange={onChange}></input>
        {/* {weightError ? (<span className="errorMsg">{weightError}</span>) : null} */}
        <button id="save" onClick={saveHistory}>Save</button>
      </div>
    </div>
  );
};
export default Weight;