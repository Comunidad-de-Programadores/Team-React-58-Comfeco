import React from 'react';
import Slider from 'react-slick';
import styles from './styles.css';
import img1 from '../../images/carouselSponsors/img-1.png';
import img2 from '../../images/carouselSponsors/img-2.png';
import img3 from '../../images/carouselSponsors/img-3.png';
import img4 from '../../images/carouselSponsors/img-4.png';
import img5 from '../../images/carouselSponsors/img-5.png';
import img6 from '../../images/carouselSponsors/img-6.png';
import img7 from '../../images/carouselSponsors/img-7.png';
import img8 from '../../images/carouselSponsors/img-8.png';
import img9 from '../../images/carouselSponsors/img-9.png';
import img10 from '../../images/carouselSponsors/img-10.png';
import img11 from '../../images/carouselSponsors/img-11.png';


const CarouselSponsors = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    speed: 500,
  };

  return (

    <div className={styles.wrapper__carousel__sponsors}>
      <Slider {...settings}>
        <div className={styles.card__cotainer}>
          <img className={styles.img__carousel} src={img1} alt=""/>
        </div>
        <div className={styles.card__cotainer}>
          <img className={styles.img__carousel} src={img2} alt=""/>
        </div>
        <div className={styles.card__cotainer}>
          <img className={styles.img__carousel} src={img3} alt=""/>
        </div>
        <div className={styles.card__cotainer}>
          <img className={styles.img__carousel} src={img4} alt=""/>
        </div>
        <div className={styles.card__cotainer}>
          <img className={styles.img__carousel} src={img5} alt=""/>
        </div>
        <div className={styles.card__cotainer}>
          <img className={styles.img__carousel} src={img6} alt=""/>
        </div>
        <div className={styles.card__cotainer}>
          <img className={styles.img__carousel} src={img7} alt=""/>
        </div>
        <div className={styles.card__cotainer}>
          <img className={styles.img__carousel} src={img8} alt=""/>
        </div>
        <div className={styles.card__cotainer}>
          <img className={styles.img__carousel} src={img9} alt=""/>
        </div>
        <div className={styles.card__cotainer}>
          <img className={styles.img__carousel} src={img10} alt=""/>
        </div>
        <div className={styles.card__cotainer}>
          <img className={styles.img__carousel} src={img11} alt=""/>
        </div>
      </Slider>
    </div>

  );
};

export default CarouselSponsors;