import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Navbar, Nav, Form, Spinner } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from './Login.js';
import Boards from './Boards.js';

const AUTH = require('../firebase/auth.js');


const Home = (props) => {

  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    isUserSignedin();
  });

  function isUserSignedin() {
    const callback = (user) => {
      setUserInfo(user);
    }
    AUTH.isUserSignedin(callback);
  }

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            {userInfo === undefined || userInfo === null ?
              <div>
                <br/>
                <br/>
                <Login
                  googleSignin = {AUTH.googleSignin}
                />
              </div>
              :
              <div>
                <br/>
                <br/>
                <Boards userInfo={userInfo} />
              </div>
            }
          </Route>
          <Route exact path="/boards">
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Home;
