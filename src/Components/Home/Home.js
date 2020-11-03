import React from "react";
import styles from "./Home.module.css";
import carouselImage1 from "./../../assets/images/carousel-image-1.jpg";
import carouselImage2 from "./../../assets/images/carousel-image-2.jpg";
import Slider from "react-slick";
import "./../../Utility/slick.css";
import gifImage from "./../../assets/images/lakeside-gif.gif";
import Card from "./Card/Card";
import taxi from "./../../assets/icons/taxi.png";
import dollar from "./../../assets/icons/dollar.png";
import calendar from "./../../assets/icons/calendar-tick.png";
import PageEnding from "./../Page/PageEnding/PageEnding";
import { Link } from "react-router-dom";

const Home = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: "linear",
    pauseOnHover: false,
  };

  const images = [carouselImage1, carouselImage2];

  return (
    <div className={styles.Home}>
      <div className={styles.carouselDiv}>
        <Slider {...settings}>
          {images.map((image, i) => {
            return (
              <div className={styles.carouImageDiv} key={i}>
                <img src={image} alt="" />
              </div>
            );
          })}
        </Slider>
        <div className={styles.carouTextDiv}>
          <h4>- Transpo Taxi Service -</h4>
          <h1>mainland's best</h1>
          <h1>taxi company</h1>
          <Link to="/contact">book now</Link>
        </div>
      </div>
      <div className={styles.description}>
        <h2>Transpo Taxi Service</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
          nobis quia deleniti eius rem deserunt nisi, corporis nostrum repellat
          doloremque officia quis quibusdam ut ducimus provident veritatis
          laborum accusantium similique alias totam nam fugiat sapiente.
          Voluptas tempore, quasi recusandae neque porro veritatis quibusdam
          animi repellat nisi dolore! Tempore nobis, cumque nemo illo sint
          provident illum ullam quia, fugit in ab porro dolorem dolorum
          inventore necessitatibus? Aspernatur veritatis ab ipsa ut.
        </p>
        <Link to="/about" className={styles.learnMore}>
          Learn More
        </Link>
      </div>
      <div className={styles.gifDiv}>
        <img src={gifImage} alt="" />
        <div className={styles.gifText}>
          <p>
            GET <em>MOVING </em> WITH
            <span className={styles.yellow}> TRANSPO</span>
          </p>
        </div>
      </div>
      <div className={styles.cards}>
        <Card
          image={taxi}
          header="Our Services"
          linkTo="/services"
          linkText="Learn more"
          description="This is just a normal description for and about your content or product or what ever the hell you are trying to sell."
        />
        <Card
          image={dollar}
          header="Our Rates"
          linkTo="/rates"
          linkText="Learn more"
          description="Cant write much for rates. Actually its done for testing small lines."
        />
        <Card
          class={styles.lastCard}
          image={calendar}
          header="Book Ahead"
          linkTo="/contact"
          linkText="Book Now"
          description="This is just a normal description for and about your content or product or what ever the hell you are trying to sell."
        />
      </div>

      <PageEnding />
    </div>
  );
};

export default Home;
