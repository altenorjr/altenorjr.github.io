import React, { Component } from 'react';
import { Presets, LookRoot } from 'react-look'
import './App.css';

import { HashRouter, Route, Redirect } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Master from './pages/Master';

const config = Presets["react-dom"];

class App extends Component {
  render() {
    return (
      <LookRoot config={config}>
        <MuiThemeProvider>
          <HashRouter>
            <div>
              <Route path="/" exact render={() => <Redirect to="/en" />} />
              <Route path="/:lang" component={Master} />
            </div>
          </HashRouter>
        </MuiThemeProvider>
      </LookRoot>
    );
  }
}

export default App;
