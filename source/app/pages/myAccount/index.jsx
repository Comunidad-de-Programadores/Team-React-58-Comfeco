/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
import React from 'react';
import { useState } from 'react-fetch-ssr';
import BadgesCardScreen from 'app/components/badgesCardScreen';
import Profile from './components/profile';
import NavBarEditPerfil from './components/navBarEditPerfil';
import styles from './styles.css'

const MyAccount = () => {
  const [currentView, setView] = useState('profile');

  return (
    <div className={styles.container}>
      <div className={styles.navBarWrapper}>
        <NavBarEditPerfil
          currentView={currentView}
          onViewChange={setView} 
        />
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
          <h5 style={{ textAlign: 'center' }}>groups view here</h5>
        )}
        {currentView === 'events' && (
          <h5 style={{ textAlign: 'center' }}>events view here</h5>
        )}
      </div>
    </div>
  )
}

export default MyAccount;