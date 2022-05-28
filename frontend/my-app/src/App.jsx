import React from "react";
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from './components/Home';
import Register from "./components/Register";
import Login from "./components/Login";
import Trailer from "./components/Trailer";
import MovieSearch from "./components/MovieSearch";
import MovieDetail from "./components/MovieDetail";

function App() {
    const user = true;
  return (
      <Router>
          <Switch>
              <Route exact path="/"><Home /></Route>
              <Route path="/register"><Register /></Route>
              <Route path="/login"><Login /></Route>
              <Route exact path="/trailer"><Trailer /></Route>
              <Route exact path="/Search"><MovieSearch /></Route>
              <Route exact path="/movieDetail/:id"><MovieDetail /></Route>
          </Switch>
      </Router>
  );
}

export default App;
