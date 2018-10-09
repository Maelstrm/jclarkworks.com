import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import './styles/bootstrap/css/bootstrap.css';
import './styles/main.css';
import './styles/background.css';


import IndexPage from './componenets/IndexPage/IndexPage';

const App = () => (
  <div>
    <Router>
      <Switch>
        <Redirect exact from="/" to="/index" />
        <Route
          path="/index"
          component={IndexPage}
        />
      </Switch>
    </Router>
  </div>
);


export default App;
