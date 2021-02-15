import React from 'react';
import Header from 'app/components/header/styles';
import { Switch, Route } from 'react-router';
import Register from './pages/register';
import Login from './pages/login';

import './style.css';
import Footer from './components/footer';
import Auth from './pages/auth';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/auth" exact component={Auth} />
    </Switch>
    <Footer />
  </div>

);

export default App;
