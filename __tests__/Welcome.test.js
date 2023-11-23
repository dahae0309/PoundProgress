import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event'
import Welcome from '../src/components/Welcome.jsx';
import React from 'react';
// import { BrowserRouter as Router } from "react-router-dom";
import { MemoryRouter } from 'react-router';

const user = userEvent.setup()

describe('welcome page test', () => {

  test('if welcome page renders elements in welcome and login component', () => {
    render(
      // <Router>
      //   <Welcome />
      // </Router>
      <MemoryRouter>
        <Welcome />
      </MemoryRouter>
    );
    const welcome = screen.getByText(/Track Weight/i);
    // const login = screen.getByText(/Please Log In/i);
    // const submit = screen.getByRole('button');
 
    expect(welcome).toBeInTheDocument();
    // expect(login).toBeInTheDocument();
    // expect(submit).toHaveTextContent("Login")
    //screen.debug()
  });

  //   test('logged in if SUMBIT button is clicked', async () => {
  //   render(
  //     <Router>
  //       <Welcome />
  //     </Router>
  //   );
      
  //     const submit = screen.getByRole('button');
  //     await user.click(submit)
  //     //check if state has changed....
  // });
  
})
 
// test('test if every components are rendering correctly', async () => {
//   render(
//     <Router>
//       <Welcome />
//     </Router>
//   );
//   const welcome = screen.getByText(/Track Weight:/i);
//   const login = screen.getByText(/Please Log In/i);
 
//   expect(welcome).toBeInTheDocument()
//   expect(login).toBeInTheDocument()

//  })