import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import PropsD from './propsAndComponet/props';
// import Events from './events/events';
//import Condition from './condition/condintion';
//import List from './lists/list'
import Form from './form/form'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Form />, document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
