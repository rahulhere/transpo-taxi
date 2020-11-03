import React from "react";
import styles from "./Services.module.css";
import PageHeading from "../Page/PageHeading/PageHeading";
import taxiImage from "./../../assets/images/services-taxi.jpg";
import Icon from "./Icon/Icon";
import airplane from "./../../assets/icons/airplane.png";
import paw from "./../../assets/icons/paw.png";
import person from "./../../assets/icons/person.png";
import speaker from "./../../assets/icons/speaker.png";
import users from "./../../assets/icons/users.png";
import wheelchair from "./../../assets/icons/wheelchair.png";
import PageEnding from "./../Page/PageEnding/PageEnding";

const Services = () => {
  return (
    <div className={styles.Services}>
      <PageHeading image={taxiImage} text="Services" />
      <div className={styles.paragraph}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          voluptatum blanditiis odio ab ipsam consequatur necessitatibus
          assumenda? Unde tenetur voluptates voluptatem repudiandae velit, dicta
          blanditiis. Cum voluptatum velit numquam earum at necessitatibus
          suscipit aliquam, error non neque distinctio odit fugiat, atque
          accusamus nesciunt repellendus officia architecto quasi! Magni ipsa
          saepe aut veniam illum quaerat iste provident, temporibus veritatis
          perferendis! Voluptatum eaque consectetur magni velit ducimus commodi,
          enim nam quisquam nemo dolores iste ipsam laborum corporis. Optio
          laborum voluptates eveniet ipsum deleniti, eius officiis natus
          doloribus, alias maiores est consequatur non, eos fugit quibusdam
          nobis! Saepe non voluptates quod fugit nisi, numquam deleniti nostrum
          facilis illum laborum aperiam inventore consequuntur quis dignissimos
          sunt ex unde ipsa minima, iure ipsam! In corrupti, enim modi atque ab
          nulla esse eos veniam error expedita ad. Excepturi ullam enim officiis
          minima iure cum a accusantium labore, perferendis assumenda aliquam.
          Voluptatibus tempora aut architecto modi sunt corporis cumque quo
          neque quisquam eveniet quod sapiente velit, ullam illo commodi nemo ab
          quasi dolor perspiciatis eius. A, officia sint. Laudantium ipsa
          inventore explicabo id ut deserunt asperiores quos, harum nostrum,
          rerum omnis debitis repellat accusamus recusandae placeat possimus ad
          voluptate facere illum et voluptatem architecto. Nostrum quas
          quibusdam harum. Sed ipsum magnam consequuntur quaerat laudantium
          culpa, assumenda nisi, harum voluptas aut eligendi nemo veniam,
          sapiente eaque ullam quam fugit? Culpa blanditiis nisi fugiat.
          Suscipit, culpa quisquam iste illum nulla architecto libero vero
          voluptate nesciunt reiciendis. Praesentium, aspernatur! Nihil,
          placeat? Cum at ad expedita? Fuga, commodi quam dolorum quisquam
          minima ipsam voluptatem cumque tempore velit cum ipsum quo? Voluptate
          laborum cupiditate repudiandae? Tempora, dicta. Laborum deleniti ullam
          facilis illum nulla obcaecati nostrum dolore unde expedita accusamus
          delectus natus, voluptatum quae culpa quod debitis inventore repellat
          tenetur dolorem quasi sint rem perspiciatis suscipit porro. Placeat
          ipsum unde sequi ut quas.
        </p>
      </div>
      <div className={styles.iconsDiv}>
        <Icon
          image={airplane}
          heading="Heading Number"
          description="This is a very very long description about heading..."
        />
        <Icon
          image={wheelchair}
          heading="Heading Number"
          description="This is a very very long description about heading..."
        />
        <Icon
          image={speaker}
          heading="Heading Number"
          description="This is a very very long description about heading..."
        />
        <Icon
          image={users}
          heading="Heading Number"
          description="This is a very very long description about heading..."
        />
        <Icon
          image={paw}
          heading="Heading Number"
          description="This is a very very long description about heading..."
        />
        <Icon
          image={person}
          heading="Heading Number"
          description="This is a very very long description about heading..."
        />
      </div>
      <PageEnding />
    </div>
  );
};

export default Services;
