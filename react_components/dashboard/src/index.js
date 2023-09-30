import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './App';
import Container from './components/Container.js';
// import Card from './components/Card.js';


let rootelement = document.getElementById('root');
const root = ReactDOM.createRoot(rootelement);
const dataset = rootelement.dataset;


root.render(<Container
    userid={dataset.userid}
    sesskey={dataset.sesskey}
    wwwroot={dataset.wwwroot}
/>);

/*
root.render(<App
    userid={dataset.userid}
    sesskey={dataset.sesskey}
    wwwroot={dataset.wwwroot}
/>);
*/
