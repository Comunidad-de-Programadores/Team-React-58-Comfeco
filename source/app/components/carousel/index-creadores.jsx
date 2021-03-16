import React, { useState } from 'react';
import Slider from 'react-slick';
import styles from './styles.css';
import img1 from '../../images/carouselCreadores/img-1.png';
import img2 from '../../images/carouselCreadores/img-2.png';
import img3 from '../../images/carouselCreadores/img-3.png';
import img4 from '../../images/carouselCreadores/img-4.png';
import img5 from '../../images/carouselCreadores/img-5.png';
import img6 from '../../images/carouselCreadores/img-6.png';
import img7 from '../../images/carouselCreadores/img-7.png';
import img8 from '../../images/carouselCreadores/img-8.png';

const CarouselCreadores = () => {
  const [currentSlide, setCurrentSlide] = useState({
    nextSlide: 0,
  });

  const { nextSlide } = currentSlide;

  const CarouselCard = ({ index, nextSlide, imgCardSlide, twitter = '#', github = '#' }) => (
    <div className={styles.card__cotainer}>
      <div
        className={`${styles.wrapper__imgCard} ${nextSlide === index ? styles.centerActivate : ''}`}
      >
        <div className={styles.overlay__img}>
          <div className={styles.box__rrss__overlay__img}>
            <a href={twitter} target="blank">
              <i className={`${'fab fa-github fa-3x'} ${styles.github}`} />
            </a>
          </div>
          <div className={styles.box__rrss__overlay__img}>
            <a href={github} target="blank">
              <i className={`${'fab fa-twitter-square fa-3x'} ${styles.twitter}`} />
            </a>
          </div>
        </div>
        <img className={styles.img__carousel} src={imgCardSlide} alt="" />
      </div>
    </div>
  );

  const SampleNextArrow = (props) => (
    <div className={`${props.className} ${styles.disabled}`} onClick={props.onClick} />
  );

  const SamplePrevArrow = (props) => (
    <div className={`${props.className} ${styles.disabled}`} onClick={props.onClick} />
  );

  const settings = {
    className: `${styles.center}`,
    dots: true,
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 100,
    autoplay: true,
    autoplaySpeed: 2000,
    lazyLoad: true,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    beforeChange: (current, next) => setCurrentSlide({ nextSlide: next }),
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className={styles.wrapper__carousel}>
      <Slider {...settings}>
        <CarouselCard index={0} nextSlide={nextSlide} imgCardSlide={img1} />
        <CarouselCard index={1} nextSlide={nextSlide} imgCardSlide={img2} />
        <CarouselCard index={2} nextSlide={nextSlide} imgCardSlide={img3} />
        <CarouselCard index={3} nextSlide={nextSlide} imgCardSlide={img4} />
        <CarouselCard index={4} nextSlide={nextSlide} imgCardSlide={img5} />
        <CarouselCard index={5} nextSlide={nextSlide} imgCardSlide={img6} />
        <CarouselCard index={6} nextSlide={nextSlide} imgCardSlide={img7} />
        <CarouselCard index={7} nextSlide={nextSlide} imgCardSlide={img8} />
      </Slider>
    </div>
  );
};

export default CarouselCreadores;
