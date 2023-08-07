import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Shared from '../src/components/Shared.jsx';
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
//import { loggedInContext } from '../context'

describe('shared page test', () => { 

  const user = userEvent.setup()
  
  test('show "ContactUs/Privacy" buttons only if user is not logged in and within Welcome page', async () => {
    render(
      <Router>
        <Shared />
      </Router>
    );
    //const wUserInfo = screen.getByText(/Track Weight:/i);
    const contactUs = screen.getByRole("button", {
      name: /contact us/i
    }); 
    expect(contactUs).toBeInTheDocument()
    //expect(contactUs).toHaveTextContent("Contact Us")

    const privacy = screen.getByRole("button", {
      name: /privacy/i
    }); 
    expect(privacy).toBeInTheDocument()
    //expect(privacy).toHaveTextContent("Privacy")

  });

  // test('show "ContactUs/Privacy" buttons only if user is not logged in and within Welcome page', async () => {
  //   render(
  //     <Router>
  //       <Shared />
  //     </Router>
  //   );
  //   //const wUserInfo = screen.getByText(/Track Weight:/i);
  //   const contactUs = screen.getAllByRole("button")[0]; 
  //   expect(contactUs).toBeInTheDocument()
  //   expect(contactUs).toHaveTextContent("Contact Us")

  //   const privacy = screen.getAllByRole("button")[1];
  //   expect(privacy).toBeInTheDocument()
  //   expect(privacy).toHaveTextContent("Privacy")

  // });
})

// test('if logged in, dashboard/logout buttons and welcome statement; if not, home', async () => {
//   render(
//     <Router>
//       <Shared />
//     </Router>
//   );
//   // const { loggedIn, setLoggedIn } = useContext(loggedInContext);
//   if (loggedIn === true) {
//     const button = screen.getByRole("button");
//     expect(button).toBeInTheDocument();
//     expect(button).toHaveTextContent("Dashboard");
  

//     // const privacy = screen.getAllByRole("button")[1];
//     // expect(privacy).toBeInTheDocument()
//     // expect(privacy).toHaveTextContent("Privacy")
//   }
//   });