/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
import React from 'react';
import { useState } from 'react-fetch-ssr';
import BadgesCardScreen from 'app/components/badgesCardScreen';
import Profile from './components/profile';
import NavBarEditPerfil from './components/navBarEditPerfil';
import Groups from './components/groups';
import styles from './styles.css'
import Evenets from './components/events';

const MyAccount = () => {
  const [currentView, setView] = useState('profile');

  return (
    <div className={styles.container}>
      <div className={styles.navBarWrapper}>
        <NavBarEditPerfil currentView={currentView} onViewChange={setView} />
      </div>
      <div className={styles.bodyWrapper}>
        {currentView === 'profile' && (
          <Profile />
        )}
        {currentView === 'badges' && (
          <div>

            <h1 style={{ textAlign: 'center' }}>Mis insignias</h1>
            <BadgesCardScreen />

          </div>
        )}
        {currentView === 'groups' && (
          <Groups />
        )}
        {currentView === 'events' && (
          <Evenets />
        )}
      </div>
    </div>
  );
};

export default MyAccount;
