import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Welcome from '../src/components/Welcome.jsx';
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

test('if welcome page renders elements in welcome and login component', async () => {
  render(
    <Router>
      <Welcome />
    </Router>
  );
  const welcome = screen.getByText(/Track Weight:/i);
  const login = screen.getByText(/Please Log In/i);
 
  expect(welcome).toBeInTheDocument()
  expect(login).toBeInTheDocument()

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