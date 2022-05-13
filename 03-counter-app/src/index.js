
import React from 'react';
import { createRoot } from 'react-dom/client';
// import PrimeraApp from './PrimeraApp';
import './index.css';
import CounterApp from './CounterApp';




// Con la forma antigua seria:

// import ReactDOM from 'react-dom';

// const divRoot = document.querySelector('root'); 

// ReactDOM.render(<PrimeraApp/>, divRoot);




const divRoot = document.getElementById('root'); 

const root = createRoot(divRoot);

root.render(<CounterApp/>);




