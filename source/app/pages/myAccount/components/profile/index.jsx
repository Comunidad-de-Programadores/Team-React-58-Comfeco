/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
import React from 'react';
import ActivityCard from 'app/components/activityCard';
import BadgesCard from 'app/components/badgesCard';
import PerfilCard from 'app/components/perfilCard';
import { useState } from 'react-fetch-ssr';
import FormEditPerfil from 'app/components/formEditPerfil';
import styles from './styles.css';
import EventsCard from '../../../../components/eventsCard';

const MyAccount = () => {
  const [isEditProfileActive, setEditProfile] = useState(false);

  const handleEditProfileActive = () => setEditProfile(true);
  const handleEditProfileClose = () => setEditProfile(false);

  return (
    <>
      {isEditProfileActive && <FormEditPerfil onCancel={handleEditProfileClose} />}
      {!isEditProfileActive && (
        <div className={styles.profileWrapper}>
          <div className={styles.side}>
            <PerfilCard onEditProfile={handleEditProfileActive} />
          </div>
          <div className={styles.center}>
            <BadgesCard />
            <ActivityCard />
          </div>
          <div className={styles.side}>
            <EventsCard />
          </div>
        </div>
      )}
    </>
  );
};

export default MyAccount;
