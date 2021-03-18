/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
import React from 'react';
import ActivityCard from 'app/components/activityCard';
import BadgesCard from 'app/components/badgesCard';
import PerfilCard from 'app/components/perfilCard';
import { useState } from 'react-fetch-ssr';
import FormEditPerfil from 'app/components/formEditPerfil'
import { func } from 'prop-types';
import styles from './styles.css'
import EventsCard from '../../../../components/eventsCard';
import withNotifications from '../../../../highOrderComponents/withNotification';

const MyProfile = ({ onSearchEventClick, setNotification }) => {
  const [isEditProfileActive, setEditProfile] = useState(false); 

  const handleEditProfileActive = () => setEditProfile(true);
  const handleEditProfileClose = () => setEditProfile(false);

  const handleSuccessEditProfile = () => {
    setNotification({
      type: 'success',
      message: 'Datos del perfil actualizado correctamente'
    })
    setEditProfile(false);
  }

  return (
    <>
      {isEditProfileActive && <FormEditPerfil onCancel={handleEditProfileClose} onSuccess={handleSuccessEditProfile} />}
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
            <EventsCard onSearchEventClick={onSearchEventClick} />
          </div>
        </div>
      )}
    </>
  );
};

MyProfile.propTypes = {
  onSearchEventClick: func.isRequired,
  setNotification: func.isRequired
}

export default withNotifications(MyProfile);
