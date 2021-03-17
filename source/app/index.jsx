import React from 'react';
import Header from 'app/components/header';
import { Switch, Route, Redirect } from 'react-router';
import Footer from './components/footer';
import Auth from './pages/auth';
import Landing from './pages/landing';
import SessionProvider from './components/sessionProvider';
import RecoverAccount from './components/recoverAccount';
import CreateNewPassword from './pages/createNewPassword';
import style from './style.css';
import MyAccount from './pages/myAccount';

const App = () => (
  <SessionProvider>
    <div className={style.wrapper}>
      <Header />
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/auth" exact component={Auth} />
        <Route path="/landing" exact component={() => <Redirect to="/" />} />
        <Route path="/recover-account" exact component={RecoverAccount} />
        <Route path="/create-new-password/:token" component={CreateNewPassword} />
        <Route path="/my-account" component={MyAccount} />

        <Redirect to="/page-not-found" />
      </Switch>
      <Footer />
    </div>
  </SessionProvider>
);

export default App;
