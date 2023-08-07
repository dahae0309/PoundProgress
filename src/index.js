import React from "react";
import { render } from 'react-dom';
import ReactDOM from 'react-dom/client';
import App from './components/App2.jsx';
// import { Router } 

import './styles2.css'

// render (
//     <App />,
//     document.getElementById('root')
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>
)