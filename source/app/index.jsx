import React from 'react';
import Header from 'app/components/header';
import { Switch, Route } from 'react-router';
import Register from './pages/register';
import Login from './pages/login';
import ExapleLogin from './pages/examplelogin';
import ExampleRegister from './pages/exampleregister';
import './style.css';
import Footer from './components/footer';
import Auth from './pages/auth';
import Landing from './pages/landing';
import SessionProvider from './components/sessionProvider';
import RecoverAccount from './components/recoverAccount';
import TermsConditions from './components/termsConditions';
import PrivacyDataProtection from './components/privacyDataProtection';
import CreateNewPassword from './pages/createNewPassword';
import CommunityCard from './components/communityCard';
import WorkshopCard from './components/workshopCard';

const App = () => (
  <SessionProvider>
    <Header />
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/auth" exact component={Auth} />
      <Route path="/landing" exact component={Landing} />
      <Route path="/recover-account" exact component={RecoverAccount} />
      <Route path="/create-new-password/:token" component={CreateNewPassword} />

      {/* only for examples */}
      <Route path="/example-login" exact component={ExapleLogin} />
      <Route path="/example-register" exact component={ExampleRegister} />
      <Route path="/terms-conditions" exact component={TermsConditions} />
      <Route path="/privacy-data-protection" exact component={PrivacyDataProtection} />
      <Route path="/community" exact component={CommunityCard} />
      <Route path="/workshop" exact component={WorkshopCard} />
    </Switch>
    <Footer />
  </SessionProvider>
);

export default App;
