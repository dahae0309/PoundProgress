import React, { Component } from 'react';

const WklyHistory = () => {
    return <div>history</div>
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