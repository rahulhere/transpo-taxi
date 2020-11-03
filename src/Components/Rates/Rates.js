import React from "react";
import styles from "./Rates.module.css";
import PageHeading from "./../Page/PageHeading/PageHeading";
import ratesCar from "./../../assets/images/rates-heading.jpg";
import Card from "./Card/Card";
import PageEnding from "./../Page/PageEnding/PageEnding";

const Rates = () => {
  return (
    <div className={styles.Rates}>
      <PageHeading image={ratesCar} text="Rates" />
      <div className={styles.paragraph}>
        <p>
          This is a paragraph. You can write your own content here, and fill in
          the blanks. What's your story and where do you go from here? Tell the
          world about your business, and make this text yours. This is a
          paragraph. You can write your own content here, and fill in the
          blanks. What's your story and where do you go from here? Tell the
          world about your business, and make this text yours. This is a
          paragraph. You can write your own content here, and fill in the
          blanks. What's your story and where do you go from here? Tell the
          world about your business, and make this text yours. This is a
          paragraph. You can write your own content here, and fill in the
          blanks. What's your story and where do you go from here? Tell the
          world about your business, and make this text yours.
        </p>
      </div>
      <div className={styles.iconsDiv}>
        <Card heading="Our Fares*" linkText="Book Now">
          <p>Flag - $3.80</p>
          <p>Distance (per km) - $2.40</p>
          <p>Wait Time (hourly) - $48.00</p>
          <p style={{ marginTop: "1.7rem" }}>Excludes flat rates.</p>
        </Card>
        <Card heading="Flat Rates" linkText="Book Now">
          <p>Downtown - $32</p>
          <p>Ferry Terminal - $28</p>
          <p>Bus Depot - $24</p>
          <p>Train Station - $26</p>
          <p>University - $25</p>
        </Card>
        <Card
          class={styles.lastCard}
          heading="Corporate Accounts"
          linkText="Learn more"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            cum dolor inventore dicta molestiae voluptatem repellendus illo
            aspernatur veniam a.
          </p>
        </Card>
      </div>
      <PageEnding />
    </div>
  );
};

export default Rates;
