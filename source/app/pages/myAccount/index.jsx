import React from 'react';
import { useState } from 'react-fetch-ssr';
import BadgesCardScreen from 'app/components/badgesCardScreen';
import Profile from './components/profile';
import NavBarEditPerfil from './components/navBarEditPerfil';
import Groups from './components/groups';
import styles from './styles.css';
import Evenets from './components/events';

const MyAccount = () => {
  const [currentView, setView] = useState('profile');

  const handleViewChange = (newView) => setView(newView);
  const handleSearchEventClick = () => setView('events');

  return (
    <div className={styles.container}>
      <div className={styles.navBarWrapper}>
        <NavBarEditPerfil currentView={currentView} onViewChange={handleViewChange} />
      </div>
      <div className={styles.bodyWrapper}>
        {currentView === 'profile' && <Profile onSearchEventClick={handleSearchEventClick} />}
        {currentView === 'badges' && <BadgesCardScreen />}
        {currentView === 'groups' && <Groups />}
        {currentView === 'events' && <Evenets />}
      </div>
    </div>
  );
};

export default MyAccount;
