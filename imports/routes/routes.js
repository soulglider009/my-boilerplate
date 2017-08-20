//Necessary imports
import React from 'react';
import {Router, Route, Switch} from 'react-router';
import createHistory from 'history/createBrowserHistory';
const history = createHistory();

// My Components
import Signup from '../ui/Signup';
import Dashboard from '../ui/Dashboard';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';

//Router configuration
const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/dashboard'];

export const onAuthChange = (isAuthenticated) => {
  const pathname = history.location.pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  if(isAuthenticated && isUnauthenticatedPage){
    history.replace('/dashboard');
  } else if(!isAuthenticated && isAuthenticatedPage){
    history.replace('/');
  }
};

export const routes = (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);
