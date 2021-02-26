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

  const CarouselCard = ({index, nextSlide, imgCardSlide, twitter = "#", github = "#"}) => (

    <div className={styles.card__cotainer}>
      <img className={styles.img__carousel} src={imgCardSlide} alt=""/>
    </div>
  
  );

  const SampleNextArrow = (props) => (<div className={`${props.className} ${styles.red}`} onClick={props.onClick} />);

  const SamplePrevArrow = (props) => (<div className={`${props.className} ${styles.red}`} onClick={props.onClick} />);


  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (

    <div className={styles.wrapper__carousel__sponsors}>
      <Slider {...settings}>
        <CarouselCard imgCardSlide={img1}/>
        <CarouselCard imgCardSlide={img2}/>
        <CarouselCard imgCardSlide={img3}/>
        <CarouselCard imgCardSlide={img4}/>
        <CarouselCard imgCardSlide={img5}/>
        <CarouselCard imgCardSlide={img6}/>
        <CarouselCard imgCardSlide={img7}/>
        <CarouselCard imgCardSlide={img8}/>
        <CarouselCard imgCardSlide={img9}/>
        <CarouselCard imgCardSlide={img10}/>
        <CarouselCard imgCardSlide={img11}/>
      </Slider>
    </div>

  );
};

export default CarouselSponsors;