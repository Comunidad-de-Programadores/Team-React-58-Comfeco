import React from 'react';
import Header from 'app/components/header';
import { Switch, Route } from 'react-router';
import Register from './pages/register';
import Login from './pages/login';
import Footer from './components/footer';
import Auth from './pages/auth';
import Landing from './pages/landing';
import SessionProvider from './components/sessionProvider';
import RecoverAccount from './components/recoverAccount';
import CreateNewPassword from './pages/createNewPassword';
import style from './style.css';
import MyAccount from './pages/myAccount';
import BadgesCardScreen from './components/badgesCardScreen/index';

const App = () => (
  <SessionProvider>
    <div className={style.wrapper}>
      <Header />
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/auth" exact component={Auth} />
        <Route path="/landing" exact component={Landing} />
        <Route path="/recover-account" exact component={RecoverAccount} />
        <Route path="/create-new-password/:token" component={CreateNewPassword} />
        <Route path="/my-account" component={MyAccount} />

        {/* only for examples */}
      </Switch>
      <Footer />
    </div>
  </SessionProvider>
);

export default App;
