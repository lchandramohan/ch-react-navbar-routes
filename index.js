import React, { Component } from 'react';
import { render } from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import AppMenu from './AppMenu.js';


class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
  
       <AppMenu />
 
    );
  }
}

render( <BrowserRouter><App /> </BrowserRouter>, document.getElementById('root'));
