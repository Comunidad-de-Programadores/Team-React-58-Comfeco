import React from 'react';
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
  const settings = {
    className: 'center',
    dots: true,
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (

    <div className={styles.wrapper__carousel}>
      <Slider {...settings}>
        {/* img1 */}
        <div className={styles.card__cotainer}>

          <div className={styles.wrapper__imgCard}>
            <div className={styles.overlay__img}>
              <div className={styles.box__rrss__overlay__img}>
                <i className={`${'fab fa-github fa-3x'} ${styles.github}`} />
              </div>
              <div className={styles.box__rrss__overlay__img}>
                <i className={`${'fab fa-twitter-square fa-3x'} ${styles.twitter}`} />
              </div>
            </div>
            <img className={styles.img__carousel} src={img1} alt="" />
          </div>

        </div>

        {/* img2 */}
        <div className={styles.card__cotainer}>

          <div className={styles.wrapper__imgCard}>
            <div className={styles.overlay__img}>
              <div className={styles.box__rrss__overlay__img}>
                <i className={`${'fab fa-github fa-3x'} ${styles.github}`} />
              </div>
              <div className={styles.box__rrss__overlay__img}>
                <i className={`${'fab fa-twitter-square fa-3x'} ${styles.twitter}`} />
              </div>
            </div>
            <img className={styles.img__carousel} src={img2} alt="" />
          </div>

        </div>

        {/* img3 */}
        <div className={styles.card__cotainer}>

          <div className={styles.wrapper__imgCard}>
            <div className={styles.overlay__img}>
              <div className={styles.box__rrss__overlay__img}>
                <i className={`${'fab fa-github fa-3x'} ${styles.github}`} />
              </div>
              <div className={styles.box__rrss__overlay__img}>
                <i className={`${'fab fa-twitter-square fa-3x'} ${styles.twitter}`} />
              </div>
            </div>
            <img className={styles.img__carousel} src={img3} alt="" />
          </div>

        </div>

        {/* img4 */}
        <div className={styles.card__cotainer}>

          <div className={styles.wrapper__imgCard}>
            <div className={styles.overlay__img}>
              <div className={styles.box__rrss__overlay__img}>
                <i className={`${'fab fa-github fa-3x'} ${styles.github}`} />
              </div>
              <div className={styles.box__rrss__overlay__img}>
                <i className={`${'fab fa-twitter-square fa-3x'} ${styles.twitter}`} />
              </div>
            </div>
            <img className={styles.img__carousel} src={img4} alt="" />
          </div>

        </div>

        {/* img5 */}
        <div className={styles.card__cotainer}>

          <div className={styles.wrapper__imgCard}>
            <div className={styles.overlay__img}>
              <div className={styles.box__rrss__overlay__img}>
                <i className={`${'fab fa-github fa-3x'} ${styles.github}`} />
              </div>
              <div className={styles.box__rrss__overlay__img}>
                <i className={`${'fab fa-twitter-square fa-3x'} ${styles.twitter}`} />
              </div>
            </div>
            <img className={styles.img__carousel} src={img5} alt="" />
          </div>

        </div>

        {/* img6 */}
        <div className={styles.card__cotainer}>

          <div className={styles.wrapper__imgCard}>
            <div className={styles.overlay__img}>
              <div className={styles.box__rrss__overlay__img}>
                <i className={`${'fab fa-github fa-3x'} ${styles.github}`} />
              </div>
              <div className={styles.box__rrss__overlay__img}>
                <i className={`${'fab fa-twitter-square fa-3x'} ${styles.twitter}`} />
              </div>
            </div>
            <img className={styles.img__carousel} src={img6} alt="" />
          </div>

        </div>

        {/* img7 */}
        <div className={styles.card__cotainer}>

          <div className={styles.wrapper__imgCard}>
            <div className={styles.overlay__img}>
              <div className={styles.box__rrss__overlay__img}>
                <i className={`${'fab fa-github fa-3x'} ${styles.github}`} />
              </div>
              <div className={styles.box__rrss__overlay__img}>
                <i className={`${'fab fa-twitter-square fa-3x'} ${styles.twitter}`} />
              </div>
            </div>
            <img className={styles.img__carousel} src={img7} alt="" />
          </div>

        </div>

        {/* img8 */}
        <div className={styles.card__cotainer}>

          <div className={styles.wrapper__imgCard}>
            <div className={styles.overlay__img}>
              <div className={styles.box__rrss__overlay__img}>
                <i className={`${'fab fa-github fa-3x'} ${styles.github}`} />
              </div>
              <div className={styles.box__rrss__overlay__img}>
                <i className={`${'fab fa-twitter-square fa-3x'} ${styles.twitter}`} />
              </div>
            </div>
            <img className={styles.img__carousel} src={img8} alt="" />
          </div>

        </div>
      </Slider>
    </div>

  );
};

export default CarouselCreadores;
