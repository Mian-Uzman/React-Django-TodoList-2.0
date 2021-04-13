import React, { useState, useEffect } from 'react';
import Navbar1 from "./components/navbar";
import HomePage from "./components/homepage";
import ToDoList from "./components/alllists";
import Items from "./components/items";
import Login from "./components/login";
import Register from "./components/register";
import Footer from "./components/footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
//  import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container } from 'react-bootstrap';


export default function App() {
  const [displayed_form, SetDisplayedForm] = useState('');
  const [username, SetUsername] = useState('');
  const [logged_in, SetLoggedIn] = useState(localStorage.getItem('token') ? true : false);
  useEffect(() => {
    if (logged_in) {
      fetch('/api/current-user/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(json => {
          SetUsername(json.username);

        }).catch(err => console.log(err));
    }
  }, [loggedIn]);



  function handle_login(e, data) {
    e.preventDefault();
    fetch('/token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        SetLoggedIn(true);
        SetDisplayedForm('');
        SetUsername(json.username);
      }).catch(err => console.log(err));

  };

  function handle_signup(e, data) {
    e.preventDefault();
    fetch('/api/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        SetLoggedIn(true);
        SetDisplayedForm('');
        SetUsername(json.username);
      }).catch(err => console.log(err));;
  };


  function handle_logout() {
    localStorage.removeItem('token');
    SetLoggedIn(false);
    SetUsername('')
      .catch(err => console.log(err));
  };


  function display_form(form) {
    SetDisplayedForm(form);

  };


  function loggedIn() {
    return (
      <React.Fragment>


        <Router>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/home' component={HomePage} />
            <Route exact path='/lists' component={ToDoList} />
            <Route exact path='/lists/:listID' component={Items} />
            {/*<Route path='/login' component={Login} handle_login={handle_login} />
            <Route path='/register' component={Register} />*/}
          </Switch>
        </Router>
      </React.Fragment>

    )
  }

  function loggedOut() {
    return (
      <React.Fragment>
        <Container style={{ marginTop: '50px' }}>
          <Login handle_login={handle_login}> </Login>
          <div className="home-card">
            <Card>
              <Card.Body>
                <Card.Header>Login or Signup Now !</Card.Header>
                <Card.Subtitle className="mb-2 mt-2 text-muted">Each user has User-specific data</Card.Subtitle>
                <Card.Text>
                  Signup to start getting things done !
                                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <Register handle_signup={handle_signup}></Register>
        </Container>
      </React.Fragment>
    )
  }


  return (
    <React.Fragment>
      <Navbar1
        logged_in={logged_in}
        display_form={display_form}
        handle_logout={handle_logout}
        username={username}
      />
      <div>
        {logged_in ? loggedIn() : loggedOut()}
      </div>
      <Footer></Footer>
    </React.Fragment>

  )
}
