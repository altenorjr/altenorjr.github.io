import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Fullpage, Slide } from 'fullpage-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Master from './pages/Master';
import About from './pages/About';

import styles from './index.css';

import MenuBar from './components/MenuBar';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <div>
            <Route path="/" exact render={() => <Redirect to="/en" />} />
            <Route path="/:lang" component={Master} />
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
