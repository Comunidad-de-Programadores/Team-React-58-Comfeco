import React from 'react';
import Header from 'app/components/header/styles';
import { Switch, Route } from 'react-router';
import Register from './pages/register';
import Login from './pages/login';

import './style.css';
import Footer from './components/footer';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
    </Switch>
    <Footer />
  </div>

);

export default App;
