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
import PageNotFoundScreen from './pages/404';
import TermsConditions from './components/termsConditions';
import PrivacyDataProtection from './components/privacyDataProtection';
import Communities from './comunities';

const App = () => (
  <SessionProvider>
    <div className={style.wrapper}>
      <Header />
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/communities" exact component={Communities} />
        <Route path="/auth" exact component={Auth} />
        <Route path="/landing" exact component={() => <Redirect to="/" />} />
        <Route path="/recover-account" exact component={RecoverAccount} />
        <Route path="/create-new-password/:token" component={CreateNewPassword} />
        <Route path="/my-account" component={MyAccount} />
        <Route path="/page-not-found" component={PageNotFoundScreen} />
        <Route path="/terms-conditions" exact component={TermsConditions} />
        <Route path="/privacy-data-protection" exact component={PrivacyDataProtection} />

        <Redirect to="/page-not-found" />
      </Switch>
      <Footer />
    </div>
  </SessionProvider>
);

export default App;
