import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './containers/Home'
import About from './containers/About'
import Contact from './containers/Contact'
import Portfolio from './containers/Portfolio'
import Error404 from './containers/Error404'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portoflio" component={Portfolio} />
        <Route path="*" component={Error404} />
      </Switch>
    </Router>
  )
}
