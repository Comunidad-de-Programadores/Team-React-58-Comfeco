import React from 'react'
import styles from './styles.css'
import img1 from '../../images/Isotipo-brand.png' 
import useBadges from 'app/hooks/useBadges'

const BadgesCardScreen = () => {

  console.log(useBadges());

  return (
  
  
  <div className={styles.badges__main__wrapper}>
  
    <div className={styles.badges__card__wrapper}>
      {/* card 1*/}
      <div className={styles.badges__Card}>
  
        {/* header card */}
        <div className={styles.badges__circle__wrapper}>
          <div className={styles.middle__wrapper__circle}></div>
          <div className={styles.badge__circle}>
            <img src={img1} alt=""/>
          </div>
        </div>
  
        {/* body card */}
        <div className={styles.badges__body__Card}>
            <span>Sociable</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quas.</p>
  
            <hr/>
  
            <span>¿Como Ganarla?</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque unde nulla iste laboriosam ad cupiditate.</p>
        </div>
  
      </div>
    
      {/* card 2*/}
      <div className={styles.badges__Card}>
  
        {/* header card */}
        <div className={styles.badges__circle__wrapper}>
          <div className={styles.middle__wrapper__circle}></div>
          <div className={styles.badge__circle}>
            <img src={img1} alt=""/>
          </div>
        </div>
  
        {/* body card */}
        <div className={styles.badges__body__Card}>
            <span>Sociable</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quas.</p>
  
            <hr/>
  
            <span>¿Como Ganarla?</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque unde nulla iste laboriosam ad cupiditate.</p>
        </div>
  
      </div>
    
      {/* card 3*/}
      <div className={styles.badges__Card}>
  
        {/* header card */}
        <div className={styles.badges__circle__wrapper}>
          <div className={styles.middle__wrapper__circle}></div>
          <div className={styles.badge__circle}>
            <img src={img1} alt=""/>
          </div>
        </div>
  
        {/* body card */}
        <div className={styles.badges__body__Card}>
            <span>Sociable</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quas.</p>
  
            <hr/>
  
            <span>¿Como Ganarla?</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque unde nulla iste laboriosam ad cupiditate.</p>
        </div>
  
      </div>
    
      {/* card 4*/}
      <div className={styles.badges__Card}>
  
        {/* header card */}
        <div className={styles.badges__circle__wrapper}>
          <div className={styles.middle__wrapper__circle}></div>
          <div className={styles.badge__circle}>
            <img src={img1} alt=""/>
          </div>
        </div>
  
        {/* body card */}
        <div className={styles.badges__body__Card}>
            <span>Sociable</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quas.</p>
  
            <hr/>
  
            <span>¿Como Ganarla?</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque unde nulla iste laboriosam ad cupiditate.</p>
        </div>
  
      </div>
    
    </div>
  </div>
  )


}


export default BadgesCardScreen;