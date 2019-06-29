import React, { Component, Fragment } from "react";
import "./App.scss";
import { Navbar } from "./components/navbar";
import { Login } from "./pages/login";
import Register from "./pages/register";
import List from "./pages/list";
import Recipe from "./components/Recipe";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import history from "history";
import Axios from "axios";
//import user from "./users.json";

export default class App extends Component {
  state = {
    term: "",
    token: ""
  };

  // onSubmit(e){
  //   Axios.post("http://localhost:4000/auth/login", {
  //      email: email,
  //      password: password
  //   }).then(content => this.setState({ token: content.data.access_token }));
  // }
  // componentDidMount() {
  //    Axios.post("http://localhost:4000/auth/login", {
  //   //   email: email,
  //   //   password: password
  //   }).then(content => this.setState({ token: content.data.access_token }));
  // }

  render() {
    return (
      <Router>
        <div className="app">
          {localStorage.getItem("token") != '' ? (
            <Fragment>
              <Navbar
                onChange={e => {
                  this.setState({ term: e.target.value });
                }}
              />
              <main className="content--container">
                <Route exact path="/" render={() => <List {...this.state} />} />
                <Route
                  exact
                  path="/food/:id"
                  render={props => <Recipe {...props} />}
                />
                <Route exact path="/register" component={Register} />
              </main>
            </Fragment>
          ) : (
            <Login onSubmit={e => this.setState({token: e.target.value})}/>
          )}
        </div>
      </Router>
    );
  }
}
