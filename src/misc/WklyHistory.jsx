import React, { useState, useEffect } from 'react';

const WklyHistory = () => {
    const [historyData, setHistoryData] = useState();
  

    const getData = async () => {
        await fetch('/history')
        .then(res=>res.json())
        .then(result => {
            setHistoryData(result)
        })
        .catch(err => console.log("error in saving history", err))
    }

    useEffect(() => {
        getData();        
    },[])
    
  
    // useEffect(() => {
    //           getData();        
    // },[])

    // const getData = async () => {
    //     await fetch('/history')
    //     .then(res=>res.json())
    //     .then(result => {
    //         setHistoryData(result)
    //     })
    //     .catch(err => console.log("error in saving history", err))
    // }


    
    const deleteHistory = (weightID) => {


      fetch('/delete', {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({id: weightID})
      })
        .then(data => data.json())
        .then(data => console.log('data is deleted'))
        .catch(err => console.log("error in saving history", err))

  }

    return (
        <div id="historySection">
            <div id="history">Your History</div>
            <div id="hisContainer">
            {historyData?.map(weightObj => (
                <div id="innerBox" key={weightObj.id}>
                    
                    
                    <button id="delete" onClick={() => deleteHistory(weightObj.id)}>Delete</button>
                    <div id="weight">Weight: {weightObj.weight}</div>
                    <div style={{ color: 'gray' }}>Date:{new Date(weightObj.created_at).toLocaleString()}</div>
                </div>
        
            ))}
            </div>
        </div>
        
    )
}

export default WklyHistory;




// import React, { Component } from 'react';

// const main = document.querySelector('#main');


// class App extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       history: []
//     }
//    }

//   componentDidMount() {
//     fetch('/main/history') 
//       .then((res) => res.json())
//       .then((data) => {
//         const users = data.users;
//         users.forEach((user) => {
//       const userListItem = document.createElement('li');
//       userListItem.appendChild(document.createTextNode(`${user.date}: ${user.weight}`)); //add difference
//       main.appendChild(userListItem);
//     });
//   });
//    }
//   render() {
//     return (
//       <div>

//       </div>
//     )
//   }
// }
// export default App;


// fetch('/main/usersInfo')
//   .then((res) => res.json())
//   .then((data) => {
//     const users = data.users;
//     users.forEach((user) => {
//       const userListItem = document.createElement('li');
//       userListItem.appendChild(document.createTextNode(`${user.date}: ${user.weight}`)); //add difference
//       main.appendChild(userListItem);
//     });
//   });