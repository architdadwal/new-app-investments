// src/ContactUs.js
import styles from "./styles/contactus.module.css";
import React from "react";

const ContactUs = () => {
  return (
    <section className={styles.contactus}>
      <div className={styles.container}>
        <h2 className={styles.containerheading}>Contact Us</h2>
        <p className={styles.containerpara}>
          If you have any questions or feedback, feel free to get in touch with
          us.
        </p>

        <div className={styles.contactform}>
          <form>
            <div className={styles.formgroup}>
              <label className={styles.containerlabel} htmlFor="name">
                Name
              </label>
              <input
                className={styles.containerinput}
                type="text"
                id="name"
                name="name"
                required
              />
            </div>
            <div className={styles.formgroup}>
              <label className={styles.containerlabel} htmlFor="email">
                Email
              </label>
              <input
                className={styles.containerinput}
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
            <div className={styles.formgroup}>
              <label className={styles.containerlabel} htmlFor="message">
                Message
              </label>
              <textarea
                className={styles.containerinputtextarea}
                id="message"
                name="message"
                rows="4"
                required
              />
            </div>
            <button className={styles.btn} type="submit">
              Send Message
            </button>
          </form>
        </div>

        <div className={styles.map}>
          <h3>Our Location</h3>
          <p>We are located at:</p>
          <address>
            123 Main Street
            <br />
            City, State ZIP
            <br />
            Country
          </address>

          <div className={styles.map}>
            <h3>Our Location</h3>
            <p>We are located at:</p>
            <address>
              123 Main Street
              <br />
              City, State ZIP
              <br />
              Country
            </address>

            <iframe
              title="Map Location"
              width="100%"
              height="400"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890123456!2d-71.06018181818182!3d42.35698765432101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM0zMzAuNDUuMzkuMTkiUyA3McKwMjAnMTAuMCJOIDcxwrAwMScxMi4wIkU!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
