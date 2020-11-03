import React from "react";
import styles from "./AboutUs.module.css";
import PageHeading from "./../Page/PageHeading/PageHeading";
import buildingImage from "./../../assets/images/aboutUs-buildings.jpg";
import taxiImage from "./../../assets/images/aboutUs-taxi.jpg";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const AboutUs = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 700px)" });

  let settings = {
    arrows: !isTabletOrMobile,
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

  return (
    <div className={styles.AboutUs}>
      <PageHeading image={buildingImage} text="About Us" />
      <div className={styles.Main}>
        <div>
          <div className={styles.imageDiv}>
            <img src={taxiImage} alt="" />
          </div>
          <div className={styles.textDiv}>
            <h1>Transpo Taxi Service</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              omnis deleniti ab vero voluptatem alias totam odio consectetur
              iure debitis. Eum eius distinctio! Tempore voluptates debitis quos
              illo odio, ea nostrum voluptatem?
            </p>
            <Link to="/contact">Book Now</Link>
          </div>
        </div>
      </div>
      <div className={styles.sliderDiv}>
        <Slider {...settings}>
          <div className={styles.sliderItem}>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero,
              autem ullam blanditiis quas recusandae officiis, suscipit aliquam
              earum corrupti ad iste aperiam, minima expedita neque voluptatum
              pariatur totam deserunt nesciunt?
            </p>
            <h5>Rahul Soni</h5>
          </div>
          <div className={styles.sliderItem}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam delectus id, voluptatibus cupiditate ab consectetur
              fugit ipsamctio inventore voluptatem alias nostrum accusantium
              consequatur ipsam doloribus dolorum!
            </p>
            <h5>Nilesh Jaiswal</h5>
          </div>
          <div className={styles.sliderItem}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Inventore corporis iste necessitatibus eaque similique nulla!
              Architecto accusamus tempore atque magnam dignissimos ipsum
              aliquam nisi molestias consequuntur voluptatum. Ea, autem quo!
            </p>
            <h5>Binod Binodiya</h5>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default AboutUs;
