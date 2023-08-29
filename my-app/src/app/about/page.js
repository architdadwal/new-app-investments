import styles from "./styles/About.module.css";
import React from "react";
import layout from "../layout";

const About = () => {
  return (
    <layout>
      <section className={styles.aboutus}>
        <div className={styles.container}>
          <h2 className={styles.containerabouthead}>About Us</h2>
          <p className={styles.containeraboutpara}>
            Welcome to ANGEL INVESTMENTS! We are a dedicated team of passionate
            developers, designers, and creatives who came together with a shared
            vision. Our diverse backgrounds and expertise allow us to approach
            challenges from multiple angles, ensuring that we deliver the best
            possible solutions to our users.
          </p>

          <p className={styles.containeraboutpara}>
            At <span>ANGEL INVESTMENTS </span>, our mission is to empower
            individuals, businesses, and communities by providing innovative
            solutions that simplify and enhance their digital experiences. We
            believe in the power of technology to bring positive change, and we
            are committed to creating tools that make a difference in people's
            lives.
          </p>

          <p className={styles.containeraboutpara}>
            Through our app, we aim to offer you a seamless and enjoyable
            platform for investments in various properties and earn through muti
            levels of marketing. Our commitment to quality and user satisfaction
            drives us to continually improve and expand our offerings.
          </p>

          <p className={styles.containeraboutpara}>
            Why choose <span> Angel investments </span> ?
          </p>
          <ul className={styles.containeraboutul}>
            <li className={styles.containeraboutuli}>
              <strong>Innovation:</strong> We thrive on innovation and are
              constantly exploring new technologies and ideas to provide you
              with cutting-edge solutions.
            </li>
            <li className={styles.containeraboutli}>
              <strong>User-Centric:</strong> Your needs and preferences are at
              the heart of everything we do. We carefully listen to your
              feedback and integrate it into our development process.
            </li>
            <li className={styles.containeraboutli}>
              <strong>Reliability:</strong> We understand the importance of a
              stable and reliable platform. Our team works tirelessly to ensure
              that our app is dependable and available whenever you need it.
            </li>
            <li className={styles.containeraboutli}>
              <strong>Community:</strong> We believe in fostering a sense of
              community among our users. Join us on this exciting journey,
              connect with other users, and share your experiences.
            </li>
          </ul>

          {/* <p className={styles.containeaboutpara}>
            We'd love to hear from you! If you have any questions, feedback, or
            suggestions, please don't hesitate to reach out to us. You can
            contact us through [provide contact details: email, social media
            links, etc.].
          </p>

          <p className={styles.containeaboutpara}>
            Thank you for choosing [Your App Name]. We look forward to serving
            you and helping you achieve your digital goals.
          </p> */}
        </div>
      </section>
    </layout>
  );
};

export default About;
